const PRODUCT_MAP =
  Object.fromEntries(
    PRODUCTS.map(product => [
      product.id,
      product
    ])
  );

function calculateCart() {

  const cart =
    getCart();

  const subtotal =
    cart.reduce(
      (total, item) => {

        const product =
          PRODUCT_MAP[item.id];

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

  const shipping =
    subtotal > 0 &&
    subtotal < 99
      ? 9.99
      : 0;

  const tax =
    subtotal * 0.07;

  const total =
    subtotal + shipping + tax;

  return {
    cart,
    subtotal,
    shipping,
    tax,
    total
  };
}

function renderCart() {

  const cartContainer =
    document.getElementById(
      "cartItems"
    );

  const summaryContainer =
    document.getElementById(
      "cartSummary"
    );

  if (
    !cartContainer ||
    !summaryContainer
  ) {
    return;
  }

  const {
    cart,
    subtotal,
    shipping,
    tax,
    total
  } = calculateCart();

  if (!cart.length) {

    renderEmptyCart(
      cartContainer,
      summaryContainer
    );

    return;
  }

  renderCartItems(
    cart,
    cartContainer
  );

  renderSummary(
    subtotal,
    shipping,
    tax,
    total,
    summaryContainer
  );

  bindCartEvents();
}

function renderEmptyCart(
  cartContainer,
  summaryContainer
) {

  cartContainer.innerHTML = `
    <div class="empty">

      <i class="bi bi-bag-x"></i>

      <h3>
        Your cart is empty
      </h3>

      <p
        style="
          color: var(--ink-mute);
        "
      >

        Looks like you haven’t added
        any products yet.

      </p>

      <a
        href="shop.html"
        class="btn-neon mt-3"
      >

        Continue Shopping

      </a>

    </div>
  `;

  summaryContainer.innerHTML =
    "";
}

function renderCartItems(
  cart,
  container
) {

  container.innerHTML =
    cart.map(item => {

      const product =
        PRODUCT_MAP[item.id];

      if (!product) {
        return "";
      }

      return `
        <div
          class="cart-row"
          data-testid="cart-item-${product.id}"
        >

          <div class="ci">

            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
            />

          </div>

          <div>

            <div class="p-cat">

              ${product.brand}
              ·
              ${product.category}

            </div>

            <h5 class="mb-2">

              ${product.name}

            </h5>

            <div
              style="
                color: var(--ink-mute);
              "
            >

              ${fmt(product.price)}

            </div>

          </div>

          <div
            class="qty-wrap"
            data-testid="cart-qty-wrap"
          >

            <button
              class="qty-dec"
              data-id="${product.id}"
            >
              −
            </button>

            <input
              type="text"
              readonly
              value="${item.qty}"
            />

            <button
              class="qty-inc"
              data-id="${product.id}"
            >
              +
            </button>

          </div>

          <div
            style="
              font-weight: 700;
            "
          >

            ${fmt(
              product.price *
              item.qty
            )}

          </div>

          <button
            class="btn-view remove-btn"
            data-id="${product.id}"
            aria-label="Remove item"
          >

            <i class="bi bi-trash"></i>

          </button>

        </div>
      `;

    }).join("");
}

function renderSummary(
  subtotal,
  shipping,
  tax,
  total,
  container
) {

  container.innerHTML = `
    <div class="summary-card">

      <h5 class="mb-4">
        Order Summary
      </h5>

      <div class="row-line">

        <span>
          Subtotal
        </span>

        <span>
          ${fmt(subtotal)}
        </span>

      </div>

      <div class="row-line">

        <span>
          Shipping
        </span>

        <span>

          ${
            shipping === 0
              ? "FREE"
              : fmt(shipping)
          }

        </span>

      </div>

      <div class="row-line">

        <span>
          Tax (7%)
        </span>

        <span>
          ${fmt(tax)}
        </span>

      </div>

      <div class="row-line total">

        <span>
          Total
        </span>

        <span class="v">
          ${fmt(total)}
        </span>

      </div>

      <a
        href="checkout.html"
        class="btn-neon w-100 mt-4"
        data-testid="checkout-btn"
      >

        <i class="bi bi-credit-card me-2"></i>

        Proceed to Checkout

      </a>

    </div>
  `;
}

function bindCartEvents() {

  document
    .querySelectorAll(".qty-inc")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.id
            );

          const cart =
            getCart();

          const item =
            cart.find(
              item =>
                item.id === id
            );

          if (!item) return;

          updateQty(
            id,
            item.qty + 1
          );

          renderCart();
        }
      );
    });

  document
    .querySelectorAll(".qty-dec")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.id
            );

          const cart =
            getCart();

          const item =
            cart.find(
              item =>
                item.id === id
            );

          if (!item) return;

          updateQty(
            id,
            item.qty - 1
          );

          renderCart();
        }
      );
    });

  document
    .querySelectorAll(".remove-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.id
            );

          removeFromCart(id);

          toast(
            "Item removed"
          );

          renderCart();
        }
      );
    });
}

document.addEventListener(
  "DOMContentLoaded",
  renderCart
);