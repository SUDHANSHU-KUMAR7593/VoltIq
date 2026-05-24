const params =
  new URLSearchParams(
    location.search
  );

const DEFAULT_MAX_PRICE = 2500;

const state = {
  cats: new Set(),
  brands: new Set(),
  maxPrice: DEFAULT_MAX_PRICE,
  rating: 0,
  search:
    (
      params.get("q") || ""
    ).toLowerCase(),
  sort: "featured"
};

if (params.get("cat")) {

  state.cats.add(
    params.get("cat")
  );
}

const DOM = {
  catFilters:
    document.getElementById(
      "catFilters"
    ),

  brandFilters:
    document.getElementById(
      "brandFilters"
    ),

  resultCount:
    document.getElementById(
      "resultCount"
    ),

  productGrid:
    document.getElementById(
      "productGrid"
    ),

  emptyState:
    document.getElementById(
      "emptyState"
    ),

  pageTitle:
    document.getElementById(
      "pageTitle"
    ),

  pageSubtitle:
    document.getElementById(
      "pageSubtitle"
    ),

  pageSearch:
    document.getElementById(
      "pageSearch"
    ),

  priceRange:
    document.getElementById(
      "priceRange"
    ),

  priceLabel:
    document.getElementById(
      "priceLabel"
    ),

  sortBy:
    document.getElementById(
      "sortBy"
    ),

  resetBtn:
    document.getElementById(
      "resetBtn"
    )
};

function debounce(
  fn,
  delay = 250
) {

  let timeout;

  return (...args) => {

    clearTimeout(timeout);

    timeout = setTimeout(
      () => fn(...args),
      delay
    );
  };
}

function renderFilters() {

  renderCategoryFilters();

  renderBrandFilters();

  bindFilterEvents();
}

function renderCategoryFilters() {

  if (!DOM.catFilters) return;

  DOM.catFilters.innerHTML =
    CATEGORIES.map(category => `

      <div class="form-check">

        <input
          class="form-check-input cat-f"
          type="checkbox"
          value="${category.id}"
          id="c-${category.id}"
          ${
            state.cats.has(
              category.id
            )
              ? "checked"
              : ""
          }
          data-testid="filter-cat-${category.id}"
        />

        <label
          class="form-check-label"
          for="c-${category.id}"
        >

          ${category.name}

          <span
            style="
              color: var(--ink-mute);
            "
          >

            (${category.count})

          </span>

        </label>

      </div>

    `).join("");
}

function renderBrandFilters() {

  if (!DOM.brandFilters) return;

  DOM.brandFilters.innerHTML =
    BRANDS.map(brand => `

      <div class="form-check">

        <input
          class="form-check-input brand-f"
          type="checkbox"
          value="${brand}"
          id="b-${brand}"
          ${
            state.brands.has(
              brand
            )
              ? "checked"
              : ""
          }
          data-testid="filter-brand-${brand}"
        />

        <label
          class="form-check-label"
          for="b-${brand}"
        >

          ${brand}

        </label>

      </div>

    `).join("");
}

function bindFilterEvents() {

  document
    .querySelectorAll(".cat-f")
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          input.checked
            ? state.cats.add(
                input.value
              )
            : state.cats.delete(
                input.value
              );

          syncURL();

          renderGrid();
        }
      );
    });

  document
    .querySelectorAll(".brand-f")
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          input.checked
            ? state.brands.add(
                input.value
              )
            : state.brands.delete(
                input.value
              );

          renderGrid();
        }
      );
    });

  document
    .querySelectorAll(".rating-f")
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          state.rating =
            Number(input.value);

          renderGrid();
        }
      );
    });
}

function applyFilters() {

  let list =
    PRODUCTS.filter(product => {

      if (
        state.cats.size &&
        !state.cats.has(
          product.category
        )
      ) {
        return false;
      }

      if (
        state.brands.size &&
        !state.brands.has(
          product.brand
        )
      ) {
        return false;
      }

      if (
        product.price >
        state.maxPrice
      ) {
        return false;
      }

      if (
        state.rating &&
        product.rating <
          state.rating
      ) {
        return false;
      }

      if (state.search) {

        const query =
          state.search;

        const searchable =
          `
            ${product.name}
            ${product.brand}
            ${product.category}
            ${product.description}
          `
            .toLowerCase();

        if (
          !searchable.includes(
            query
          )
        ) {
          return false;
        }
      }

      return true;
    });

  list = [...list];

  switch (state.sort) {

    case "lh":

      list.sort(
        (a, b) =>
          a.price - b.price
      );

      break;

    case "hl":

      list.sort(
        (a, b) =>
          b.price - a.price
      );

      break;

    case "rating":

      list.sort(
        (a, b) =>
          b.rating - a.rating
      );

      break;

    case "new":

      list.sort(
        (a, b) =>
          Number(
            b.badge === "new"
          ) -
          Number(
            a.badge === "new"
          )
      );

      break;

    default:

      list.sort(
        (a, b) =>
          Number(
            b.badge === "hot"
          ) -
          Number(
            a.badge === "hot"
          )
      );
  }

  return list;
}

function renderGrid() {

  if (!DOM.productGrid) return;

  const products =
    applyFilters();

  if (DOM.resultCount) {

    DOM.resultCount.textContent =
      products.length;
  }

  if (!products.length) {

    DOM.productGrid.innerHTML =
      "";

    if (DOM.emptyState) {

      DOM.emptyState.style.display =
        "block";
    }

    return;
  }

  if (DOM.emptyState) {

    DOM.emptyState.style.display =
      "none";
  }

  DOM.productGrid.innerHTML =
    products.map(product => `

      <div class="col-lg-4 col-md-6">

        ${productCardHTML(product)}

      </div>

    `).join("");
}

function syncURL() {

  const url =
    new URL(location.href);

  if (state.search) {

    url.searchParams.set(
      "q",
      state.search
    );

  } else {

    url.searchParams.delete(
      "q"
    );
  }

  if (state.cats.size) {

    url.searchParams.set(
      "cat",
      [...state.cats][0]
    );

  } else {

    url.searchParams.delete(
      "cat"
    );
  }

  history.replaceState(
    {},
    "",
    url
  );
}

function setupPageMeta() {

  if (
    params.get("cat")
  ) {

    const category =
      CATEGORIES.find(
        category =>
          category.id ===
          params.get("cat")
      );

    if (category) {

      DOM.pageTitle.textContent =
        category.name;

      DOM.pageSubtitle.textContent =
        `Browse our ${category.name.toLowerCase()} collection`;
    }

    return;
  }

  if (state.search) {

    DOM.pageTitle.textContent =
      `Results for "${state.search}"`;
  }
}

function resetFilters() {

  state.cats.clear();

  state.brands.clear();

  state.maxPrice =
    DEFAULT_MAX_PRICE;

  state.rating = 0;

  state.search = "";

  state.sort = "featured";

  if (DOM.priceRange) {

    DOM.priceRange.value =
      DEFAULT_MAX_PRICE;
  }

  if (DOM.priceLabel) {

    DOM.priceLabel.textContent =
      `$${DEFAULT_MAX_PRICE}`;
  }

  if (DOM.pageSearch) {

    DOM.pageSearch.value =
      "";
  }

  if (DOM.sortBy) {

    DOM.sortBy.value =
      "featured";
  }

  const ratingDefault =
    document.getElementById(
      "r0"
    );

  if (ratingDefault) {

    ratingDefault.checked = true;
  }

  renderFilters();

  renderGrid();

  syncURL();
}

function bindPageEvents() {

  if (
    DOM.pageSearch &&
    state.search
  ) {

    DOM.pageSearch.value =
      state.search;
  }

  DOM.pageSearch?.addEventListener(
    "input",
    debounce(event => {

      state.search =
        event.target.value
          .trim()
          .toLowerCase();

      syncURL();

      renderGrid();

    })
  );

  DOM.priceRange?.addEventListener(
    "input",
    event => {

      state.maxPrice =
        Number(
          event.target.value
        );

      DOM.priceLabel.textContent =
        `$${state.maxPrice}`;

      renderGrid();
    }
  );

  DOM.sortBy?.addEventListener(
    "change",
    event => {

      state.sort =
        event.target.value;

      renderGrid();
    }
  );

  DOM.resetBtn?.addEventListener(
    "click",
    resetFilters
  );
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFilters();

    renderGrid();

    setupPageMeta();

    bindPageEvents();

  }
);