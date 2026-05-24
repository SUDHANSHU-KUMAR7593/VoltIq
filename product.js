const PRODUCT_ID =
  Number(
    new URLSearchParams(
      location.search
    ).get("id")
  ) || 1;

const PRODUCT_MAP =
  Object.fromEntries(
    PRODUCTS.map(product => [
      product.id,
      product
    ])
  );

const product =
  PRODUCT_MAP[PRODUCT_ID] ||
  PRODUCTS[0];

let currentQty = 1;

function renderProductPage() {

  renderBreadcrumb();

  renderProductDetails();

  renderRelatedProducts();

  bindProductEvents();
}

function renderBreadcrumb() {

  const crumb =
    document.getElementById(
      "crumb"
    );

  if (!crumb) return;

  crumb.innerHTML = `
    <button
      type="button"
      class="back-btn"
      onclick="if(history.length > 1){ history.back(); } else { location.href='shop.html'; }"
    >
      <i class="bi bi-arrow-left"></i>
      Back
    </button>

    <a href="home.html">
      Home
    </a>

    <span class="sep">/</span>

    <a href="shop.html?cat=${product.category}">
      ${product.category}
    </a>

    <span class="sep">/</span>

    <span style="color:var(--ink)">
      ${product.name}
    </span>
  `;
}

function renderProductDetails() {

  const container =
    document.getElementById(
      "pdContainer"
    );

  if (!container) return;

  const wished =
    getWish().includes(product.id);

  const images =
    product.images?.length
      ? product.images
      : [product.image];

  const discount =
    product.was
      ? Math.round(
          (
            (product.was - product.price) /
            product.was
          ) * 100
        )
      : 0;

  const stars =
    "★".repeat(
      Math.round(product.rating)
    ) +
    "☆".repeat(
      5 -
      Math.round(product.rating)
    );

  container.innerHTML = `
    <div class="row g-5">

      <div class="col-lg-6">

        <div class="pd-gallery">

          <img
            id="mainImg"
            src="${images[0]}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='/assets/fallback.png'"
          />

        </div>

        <div class="pd-thumbs">

          ${images.map((src, index) => `

            <button
              class="t ${
                index === 0
                  ? "active"
                  : ""
              }"
              data-src="${src}"
              data-testid="thumb-${index}"
              aria-label="Product image ${index + 1}"
            >

              <img
                src="${src}"
                alt="${product.name}"
                loading="lazy"
              />

            </button>

          `).join("")}

        </div>

      </div>

      <div class="col-lg-6 pd-meta">

        <div class="p-cat">

          ${product.brand}
          ·
          ${product.category}

        </div>

        <h1 data-testid="product-title">

          ${product.name}

        </h1>

        <div class="p-rating">

          ${stars}

          <span style="color:var(--ink-mute)">

            &nbsp;
            (${product.reviews} reviews)

          </span>

        </div>

        <p style="color:var(--ink-mute)">

          ${product.description}

        </p>

        <div class="price-row">

          <span
            class="now"
            data-testid="product-price"
          >
            ${fmt(product.price)}
          </span>

          ${
            product.was
              ? `
                <span class="was">
                  ${fmt(product.was)}
                </span>

                <span class="off">
                  -${discount}%
                </span>
              `
              : ""
          }

        </div>

        <div
          class="d-flex gap-3 align-items-center flex-wrap my-4"
        >

          <div
            class="qty-wrap"
            data-testid="qty-wrap"
          >

            <button
              id="qtyDec"
              data-testid="qty-dec"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <input
              type="text"
              id="qty"
              value="${currentQty}"
              readonly
            />

            <button
              id="qtyInc"
              data-testid="qty-inc"
              aria-label="Increase quantity"
            >
              +
            </button>

          </div>

          <button
            class="btn-neon"
            id="addCartBtn"
            data-testid="pd-add-cart"
          >

            <i class="bi bi-bag-plus me-2"></i>

            Add to Cart

          </button>

          <button
            class="btn-ghost"
            id="wishBtnPD"
            data-testid="pd-wish-btn"
          >

            <i class="bi ${
              wished
                ? "bi-heart-fill"
                : "bi-heart"
            } me-2"></i>

            ${
              wished
                ? "Wishlisted"
                : "Wishlist"
            }

          </button>

        </div>

        <div
          class="d-flex align-items-center gap-3 my-3 flex-wrap"
        >

          <span style="color:var(--lime)">

            <i class="bi bi-check-circle-fill me-1"></i>

            In Stock
            (${product.stock})

          </span>

          <span style="color:var(--ink-mute)">

            <i class="bi bi-truck me-1"></i>

            Ships in 24h

          </span>

        </div>

        <ul class="spec-list">

          ${Object.entries(
            product.specs || {}
          ).map(([key, value]) => `

            <li>

              <span>${key}</span>

              <strong>${value}</strong>

            </li>

          `).join("")}

        </ul>

      </div>

    </div>
  `;
}

function renderRelatedProducts() {

  const relatedContainer =
    document.getElementById(
      "related"
    );

  if (!relatedContainer) return;

  const related =
    PRODUCTS
      .filter(item =>
        item.category ===
          product.category &&
        item.id !== product.id
      )
      .slice(0, 4);

  if (!related.length) {

    relatedContainer.innerHTML = `
      <div class="col-12">

        <div class="empty text-center">

          <i class="bi bi-search"></i>

          <h3>
            No related products found
          </h3>

        </div>

      </div>
    `;

    return;
  }

  relatedContainer.innerHTML =
    related.map(item => `

      <div class="col-lg-3 col-md-6">

        ${productCardHTML(item)}

      </div>

    `).join("");
}

function bindProductEvents() {

  bindGalleryEvents();

  bindQuantityEvents();

  bindCartEvent();

  bindWishlistEvent();
}

function bindGalleryEvents() {

  const thumbnails =
    document.querySelectorAll(
      ".pd-thumbs .t"
    );

  const mainImg =
    document.getElementById(
      "mainImg"
    );

  thumbnails.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const src =
          button.dataset.src;

        mainImg.src = src;

        thumbnails.forEach(
          thumb =>
            thumb.classList.remove(
              "active"
            )
        );

        button.classList.add(
          "active"
        );
      }
    );
  });
}

function bindQuantityEvents() {

  const qtyInput =
    document.getElementById(
      "qty"
    );

  const incBtn =
    document.getElementById(
      "qtyInc"
    );

  const decBtn =
    document.getElementById(
      "qtyDec"
    );

  if (!qtyInput) return;

  incBtn?.addEventListener(
    "click",
    () => {

      currentQty =
        Math.min(
          99,
          currentQty + 1
        );

      qtyInput.value =
        currentQty;
    }
  );

  decBtn?.addEventListener(
    "click",
    () => {

      currentQty =
        Math.max(
          1,
          currentQty - 1
        );

      qtyInput.value =
        currentQty;
    }
  );
}

function bindCartEvent() {

  const addBtn =
    document.getElementById(
      "addCartBtn"
    );

  if (!addBtn) return;

  addBtn.addEventListener(
    "click",
    () => {

      addToCart(
        product.id,
        currentQty
      );

      toast(
        `${product.name} added to cart`
      );
    }
  );
}

function bindWishlistEvent() {

  const wishBtn =
    document.getElementById(
      "wishBtnPD"
    );

  if (!wishBtn) return;

  wishBtn.addEventListener(
    "click",
    () => {

      toggleWish(product.id);

      updateWishlistButton();
    }
  );
}

function updateWishlistButton() {

  const button =
    document.getElementById(
      "wishBtnPD"
    );

  if (!button) return;

  const wished =
    getWish().includes(
      product.id
    );

  button.innerHTML = `
    <i class="bi ${
      wished
        ? "bi-heart-fill"
        : "bi-heart"
    } me-2"></i>

    ${
      wished
        ? "Wishlisted"
        : "Wishlist"
    }
  `;
}

document.addEventListener(
  "DOMContentLoaded",
  renderProductPage
);