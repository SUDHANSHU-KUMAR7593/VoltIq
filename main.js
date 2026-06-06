const STORAGE_KEYS = {
  CART: "voltiq_cart",
  WISHLIST: "voltiq_wishlist",
  USER: "voltiq_user",
  USERS: "voltiq_users"
};

function safeParse(value, fallback) {

  try {

    return JSON.parse(value);

  } catch {

    return fallback;
  }
}

function getCart() {

  return safeParse(
    localStorage.getItem(
      STORAGE_KEYS.CART
    ),
    []
  );
}

function setCart(cart) {

  localStorage.setItem(
    STORAGE_KEYS.CART,
    JSON.stringify(cart)
  );

  updateBadges();
}

function getWish() {

  return safeParse(
    localStorage.getItem(
      STORAGE_KEYS.WISHLIST
    ),
    []
  );
}

function setWish(wishlist) {

  localStorage.setItem(
    STORAGE_KEYS.WISHLIST,
    JSON.stringify(wishlist)
  );

  updateBadges();
}

function getUser() {

  return safeParse(
    localStorage.getItem(
      STORAGE_KEYS.USER
    ),
    null
  );
}

function setUser(user) {

  localStorage.setItem(
    STORAGE_KEYS.USER,
    JSON.stringify(user)
  );

  updateNavbarAuth();
}

function getUsers() {

  return safeParse(
    localStorage.getItem(
      STORAGE_KEYS.USERS
    ),
    []
  );
}

function setUsers(users) {

  localStorage.setItem(
    STORAGE_KEYS.USERS,
    JSON.stringify(users)
  );
}

function signup(
  name,
  email,
  password
) {

  const users =
    getUsers();

  const exists =
    users.find(user =>
      user.email.toLowerCase() ===
      email.toLowerCase()
    );

  if (exists) {

    return {
      ok: false,
      msg: "Account already exists"
    };
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password
  };

  users.push(user);

  setUsers(users);

  setUser(user);

  return {
    ok: true,
    user
  };
}

function login(
  email,
  password
) {

  const users =
    getUsers();

  const user =
    users.find(user =>
      user.email.toLowerCase() ===
        email.toLowerCase() &&
      user.password === password
    );

  if (!user) {

    return {
      ok: false,
      msg: "Invalid email or password"
    };
  }

  setUser(user);

  return {
    ok: true,
    user
  };
}

function logout() {

  localStorage.removeItem(
    STORAGE_KEYS.USER
  );

  updateNavbarAuth();

  toast("Logged out");

  setTimeout(() => {

    location.href =
      "index.html";

  }, 400);
}

function addToCart(
  productId,
  quantity = 1
) {

  const cart =
    getCart();

  const existing =
    cart.find(item =>
      item.id === productId
    );

  if (existing) {

    existing.qty += quantity;

  } else {

    cart.push({
      id: productId,
      qty: quantity
    });
  }

  setCart(cart);

  toast(
    "Added to cart ⚡"
  );
}

function removeFromCart(
  productId
) {

  const updated =
    getCart().filter(item =>
      item.id !== productId
    );

  setCart(updated);
}

function updateQty(
  productId,
  quantity
) {

  const cart =
    getCart();

  const item =
    cart.find(item =>
      item.id === productId
    );

  if (!item) return;

  item.qty =
    Math.max(
      1,
      Math.min(99, quantity)
    );

  setCart(cart);
}

function cartTotal() {

  return getCart().reduce(
    (total, item) => {

      const product =
        PRODUCTS.find(
          product =>
            product.id === item.id
        );

      if (!product) {
        return total;
      }

      return (
        total +
        product.price * item.qty
      );

    },
    0
  );
}

function toggleWish(
  productId
) {

  const wishlist =
    getWish();

  const exists =
    wishlist.includes(
      productId
    );

  const updated =
    exists
      ? wishlist.filter(
          id =>
            id !== productId
        )
      : [
          ...wishlist,
          productId
        ];

  setWish(updated);

  toast(
    exists
      ? "Removed from wishlist"
      : "Added to wishlist ❤️"
  );
}

function updateBadges() {

  const cartBadge =
    document.getElementById(
      "cartBadge"
    );

  const wishBadge =
    document.getElementById(
      "wishBadge"
    );

  const cartCount =
    getCart().reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );

  const wishCount =
    getWish().length;

  if (cartBadge) {

    cartBadge.textContent =
      cartCount;
  }

  if (wishBadge) {

    wishBadge.textContent =
      wishCount;
  }
}

function fmt(value) {

  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD"
    }
  ).format(value);
}

function toast(
  message,
  type = "success"
) {

  let stack =
    document.querySelector(
      ".toast-stack"
    );

  if (!stack) {

    stack =
      document.createElement(
        "div"
      );

    stack.className =
      "toast-stack";

    document.body.appendChild(
      stack
    );
  }

  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    `toast-msg ${type}`;

  toast.textContent =
    message;

  stack.appendChild(toast);

  setTimeout(() => {

    toast.style.opacity = "0";

    toast.style.transform =
      "translateY(-8px)";

  }, 2400);

  setTimeout(() => {

    toast.remove();

  }, 3000);
}

function truncate(
  text,
  length = 40
) {

  return text.length > length
    ? text.slice(
        0,
        length
      ) + "..."
    : text;
}

function sanitize(value) {

  return String(value)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function productCardHTML(
  product
) {

  const wished =
    getWish().includes(
      product.id
    );

  return `
    <div
      class="p-card"
      data-testid="product-card-${product.id}"
    >

      <div class="p-img">

        ${
          product.badge
            ? `
              <span class="p-badge ${product.badge}">
                ${product.badge}
              </span>
            `
            : ""
        }

        <button
          class="p-wish ${
            wished
              ? "active"
              : ""
          }"
          onclick="toggleWish(${product.id})"
          aria-label="Wishlist"
        >

          <i class="bi ${
            wished
              ? "bi-heart-fill"
              : "bi-heart"
          }"></i>

        </button>

        <a
          href="product.html?id=${product.id}"
        >

          <img
            src="${product.image}"
            alt="${sanitize(product.name)}"
            loading="lazy"
            onerror="this.src='assets/fallback.png'"
          />

        </a>

      </div>

      <div class="p-body">

        <div class="p-cat">

          ${product.brand}
          ·
          ${product.category}

        </div>

        <a
          href="product.html?id=${product.id}"
          class="p-title"
        >

          ${sanitize(product.name)}

        </a>

        <div class="p-rating">

          ${"★".repeat(
            Math.round(
              product.rating
            )
          )}

          <span>

            (${product.reviews})

          </span>

        </div>

        <div class="p-price">

          <span class="now">

            ${fmt(product.price)}

          </span>

          ${
            product.was
              ? `
                <span class="was">
                  ${fmt(product.was)}
                </span>
              `
              : ""
          }

        </div>

      </div>

      <div class="p-foot">

        <button
          class="btn-add"
          onclick="addToCart(${product.id})"
        >

          <i class="bi bi-bag-plus me-2"></i>

          Add

        </button>

        <a
          href="product.html?id=${product.id}"
          class="btn-view"
        >

          <i class="bi bi-eye"></i>

        </a>

      </div>

    </div>
  `;
}

function renderNavbar() {

  const navbar =
    document.getElementById(
      "navbar"
    );

  if (!navbar) return;

  navbar.innerHTML = `
    <nav class="nav-voltiq">

      <div class="container-xxl">

        <div
          class="d-flex align-items-center justify-content-between gap-3"
        >

          <a
            href="index.html"
            class="brand"
          >

            <span class="dot"></span>

            VOLTIQ

          </a>

          <div class="search-wrap d-none d-lg-block">

            <i class="bi bi-search"></i>

            <input
              id="globalSearchInput"
              type="text"
              placeholder="Search products..."
              data-testid="global-search-input"
            />

          </div>

          <div
            class="d-flex align-items-center gap-2"
          >

            <a
              href="wishlist.html"
              class="icon-btn"
            >

              <i class="bi bi-heart"></i>

              <span
                class="badge-c"
                id="wishBadge"
              >
                0
              </span>

            </a>

            <a
              href="cart.html"
              class="icon-btn"
            >

              <i class="bi bi-bag"></i>

              <span
                class="badge-c"
                id="cartBadge"
              >
                0
              </span>

            </a>

            <div id="navAuth"></div>

          </div>

        </div>

      </div>

    </nav>
  `;

  bindGlobalSearch();

  updateNavbarAuth();

  updateBadges();
}

function updateNavbarAuth() {

  const slot =
    document.getElementById(
      "navAuth"
    );

  if (!slot) return;

  const user =
    getUser();

  if (!user) {

    slot.innerHTML = `
      <div
        class="d-flex gap-2"
      >

        <a
          href="login.html"
          class="btn-ghost"
        >
          Sign in
        </a>

        <a
          href="signup.html"
          class="btn-neon"
        >
          Join
        </a>

      </div>
    `;

    return;
  }

  slot.innerHTML = `
    <div class="dropdown">

      <button
        class="btn-ghost dropdown-toggle"
        data-bs-toggle="dropdown"
      >

        <i class="bi bi-person-circle me-2"></i>

        ${sanitize(user.name)}

      </button>

      <ul class="dropdown-menu dropdown-menu-dark">

        <li>

          <a
            href="#"
            class="dropdown-item"
            id="logoutBtn"
            data-testid="logout-btn"
          >

            Logout

          </a>

        </li>

      </ul>

    </div>
  `;

  document
    .getElementById(
      "logoutBtn"
    )
    ?.addEventListener(
      "click",
      logout
    );
}

function renderFooter() {

  const footer =
    document.getElementById(
      "footer"
    );

  if (!footer) return;

  footer.innerHTML = `
    <footer>

      <div class="container-xxl">

        <div class="row g-4">

          <div class="col-lg-4">

            <a
              href="index.html"
              class="brand"
            >

              <span class="dot"></span>

              VOLTIQ

            </a>

            <p class="mt-3">

              Premium electronics and
              futuristic gadgets built
              for creators, gamers,
              and innovators.

            </p>

          </div>

          <div class="col-6 col-lg-2">

            <h6>
              Shop
            </h6>

            <a href="shop.html">
              All Products
            </a>

            <a href="wishlist.html">
              Wishlist
            </a>

            <a href="cart.html">
              Cart
            </a>

          </div>

          <div class="col-6 col-lg-2">

            <h6>
              Company
            </h6>

            <a href="about.html">
              About
            </a>

            <a href="login.html">
              Login
            </a>

            <a href="signup.html">
              Signup
            </a>

          </div>

          <div class="col-lg-4">

            <h6>
              Stay updated
            </h6>

            <p>
              Get updates on new launches
              and exclusive deals.
            </p>

          </div>

        </div>

        <hr
          style="
            border-color:var(--line);
            margin:32px 0 18px;
          "
        />

        <div
          class="d-flex justify-content-between flex-wrap gap-3"
        >

          <span>
            © 2026 VOLTIQ
          </span>

          <span>
            Built with ⚡
          </span>

        </div>

      </div>

    </footer>
  `;
}

function bindGlobalSearch() {

  const input =
    document.getElementById(
      "globalSearchInput"
    );

  if (!input) return;

  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        const query =
          input.value.trim();

        if (!query) return;

        location.href =
  "shop.html?q=" +
  encodeURIComponent(query);
      }
    }
  );
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderNavbar();

    renderFooter();

    updateBadges();
  }
);
