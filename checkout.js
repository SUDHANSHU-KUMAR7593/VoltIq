const PRODUCT_MAP =
  Object.fromEntries(
    PRODUCTS.map(product => [
      product.id,
      product
    ])
  );

const REQUIRED_FIELDS = [
  "fName",
  "fEmail",
  "fPhone",
  "fAddr",
  "fCity",
  "fZip"
];

function calcTotals() {

  const subtotal =
    cartTotal();

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
    subtotal,
    shipping,
    tax,
    total
  };
}

function renderCheckout() {

  const cart =
    getCart();

  const container =
    document.getElementById(
      "checkoutContainer"
    );

  if (!container) return;

  if (!cart.length) {

    renderEmptyCheckout(
      container
    );

    return;
  }

  const user =
    getUser();

  const {
    subtotal,
    shipping,
    tax,
    total
  } = calcTotals();

  container.innerHTML = `
    <div class="row g-4">

      <div class="col-lg-8">

        ${shippingSection(user)}

        ${paymentSection()}

      </div>

      <div class="col-lg-4">

        ${summarySection(
          cart,
          subtotal,
          shipping,
          tax,
          total
        )}

      </div>

    </div>
  `;

  bindCheckoutEvents();
}

function renderEmptyCheckout(
  container
) {

  container.innerHTML = `
    <div class="empty">

      <i class="bi bi-bag-x"></i>

      <h3>
        Nothing to checkout
      </h3>

      <p>
        Your cart is empty.
        Add products first.
      </p>

      <a
        href="shop.html"
        class="btn-neon"
      >
        Browse products
      </a>

    </div>
  `;
}

function shippingSection(user) {

  return `
    <div class="filter-card mb-4">

      <h5 class="mb-4">

        <i class="bi bi-geo-alt me-2"></i>

        Shipping Address

      </h5>

      <div class="row g-3">

        <div class="col-md-6">

          <div class="field">

            <label>
              Full Name
            </label>

            <input
              id="fName"
              value="${sanitize(
                user?.name || ""
              )}"
              required
              data-testid="co-name"
            />

          </div>

        </div>

        <div class="col-md-6">

          <div class="field">

            <label>
              Email
            </label>

            <input
              type="email"
              id="fEmail"
              value="${sanitize(
                user?.email || ""
              )}"
              required
              data-testid="co-email"
            />

          </div>

        </div>

        <div class="col-md-6">

          <div class="field">

            <label>
              Phone
            </label>

            <input
              id="fPhone"
              required
              data-testid="co-phone"
            />

          </div>

        </div>

        <div class="col-md-6">

          <div class="field">

            <label>
              Country
            </label>

            <select
              id="fCountry"
              data-testid="co-country"
            >

              <option>
                United States
              </option>

              <option>
                United Kingdom
              </option>

              <option>
                Canada
              </option>

              <option>
                Germany
              </option>

              <option selected>
                India
              </option>

              <option>
                Australia
              </option>

            </select>

          </div>

        </div>

        <div class="col-12">

          <div class="field">

            <label>
              Address
            </label>

            <input
              id="fAddr"
              required
              data-testid="co-addr"
            />

          </div>

        </div>

        <div class="col-md-5">

          <div class="field">

            <label>
              City
            </label>

            <input
              id="fCity"
              required
              data-testid="co-city"
            />

          </div>

        </div>

        <div class="col-md-4">

          <div class="field">

            <label>
              State
            </label>

            <input
              id="fState"
            />

          </div>

        </div>

        <div class="col-md-3">

          <div class="field">

            <label>
              ZIP
            </label>

            <input
              id="fZip"
              required
              data-testid="co-zip"
            />

          </div>

        </div>

      </div>

    </div>
  `;
}

function paymentSection() {

  return `
    <div class="filter-card">

      <h5 class="mb-4">

        <i class="bi bi-credit-card me-2"></i>

        Payment Method

      </h5>

      <div
        class="d-flex gap-2 flex-wrap mb-4"
      >

        ${[
          "Card",
          "PayPal",
          "Apple Pay",
          "Crypto"
        ].map((method, index) => `

          <label
            class="btn-ghost"
            style="cursor:pointer"
          >

            <input
              type="radio"
              name="pay"
              value="${method}"
              class="me-2"
              ${
                index === 0
                  ? "checked"
                  : ""
              }
            />

            ${method}

          </label>

        `).join("")}

      </div>

      <div class="row g-3">

        <div class="col-12">

          <div class="field">

            <label>
              Card Number
            </label>

            <input
              id="cardNumber"
              placeholder="4242 4242 4242 4242"
            />

          </div>

        </div>

        <div class="col-md-6">

          <div class="field">

            <label>
              Name on Card
            </label>

            <input
              id="cardName"
              placeholder="JOHN DOE"
            />

          </div>

        </div>

        <div class="col-md-3">

          <div class="field">

            <label>
              Expiry
            </label>

            <input
              id="cardExp"
              placeholder="MM/YY"
            />

          </div>

        </div>

        <div class="col-md-3">

          <div class="field">

            <label>
              CVV
            </label>

            <input
              id="cardCvv"
              placeholder="123"
            />

          </div>

        </div>

      </div>

      <small
        style="
          color: var(--ink-mute);
        "
      >

        <i class="bi bi-shield-lock me-1"></i>

        Demo checkout only.
        No real payment processed.

      </small>

    </div>
  `;
}

function summarySection(
  cart,
  subtotal,
  shipping,
  tax,
  total
) {

  return `
    <div class="summary-card">

      <h5 class="mb-4">
        Order Summary
      </h5>

      ${cart.map(item => {

        const product =
          PRODUCT_MAP[item.id];

        if (!product) {
          return "";
        }

        return `
          <div
            class="d-flex justify-content-between py-2"
            style="
              border-bottom:
              1px solid var(--line)
            "
          >

            <span
              style="
                color: var(--ink-mute);
              "
            >

              ${truncate(
                product.name,
                28
              )}

              × ${item.qty}

            </span>

            <span>

              ${fmt(
                product.price *
                item.qty
              )}

            </span>

          </div>
        `;

      }).join("")}

      <div class="row-line mt-3">

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

      <button
        class="btn-neon w-100 mt-4"
        id="placeOrderBtn"
        data-testid="place-order-btn"
      >

        <i class="bi bi-bag-check me-2"></i>

        Place Order

      </button>

    </div>
  `;
}

function bindCheckoutEvents() {

  const placeOrderBtn =
    document.getElementById(
      "placeOrderBtn"
    );

  if (!placeOrderBtn) return;

  placeOrderBtn.addEventListener(
    "click",
    placeOrder
  );
}

function validateCheckout() {

  for (const id of REQUIRED_FIELDS) {

    const field =
      document.getElementById(id);

    if (
      !field ||
      !field.value.trim()
    ) {

      toast(
        "Please fill all required fields",
        "error"
      );

      field?.focus();

      return false;
    }
  }

  const email =
    document
      .getElementById(
        "fEmail"
      )
      .value.trim();

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(email)
  ) {

    toast(
      "Invalid email address",
      "error"
    );

    return false;
  }

  return true;
}

function placeOrder() {

  if (!validateCheckout()) {
    return;
  }

  const button =
    document.getElementById(
      "placeOrderBtn"
    );

  button.disabled = true;

  button.innerHTML = `
    <span
      class="spinner-border spinner-border-sm me-2"
    ></span>

    Processing...
  `;

  const orderId =
    "VOL-" +
    Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase();

  const order = {
    id: orderId,
    items: getCart(),
    totals: calcTotals(),
    createdAt:
      new Date().toISOString()
  };

  localStorage.setItem(
    "voltiq_last_order",
    JSON.stringify(order)
  );

  setTimeout(() => {

    setCart([]);

    location.href =
  "success.html?id=" + orderId;

  }, 1200);
}

document.addEventListener(
  "DOMContentLoaded",
  renderCheckout
);
