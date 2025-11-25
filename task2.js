const API_BASE = "https://dummyjson.com/products";
const API_SEARCH = "https://dummyjson.com/products/search?q=";
const API_CATEGORIES = "https://dummyjson.com/products/categories";
const API_CATEGORY = "https://dummyjson.com/products/category/";

const productsContainer = document.getElementById("productsContainer");
const sortBtns = document.querySelectorAll(".sort-btns button");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const categoriesForm = document.getElementById("categoriesForm");
const clearCategoriesBtn = document.getElementById("clearCategoriesBtn");

let allProducts = [];
let filteredProducts = [];
let searchMode = false;
let searchProducts = [];
let selectedCategory = "";

// Calculate final price after discount
function calcDiscountedPrice(price, discount) {
  return (price * (1 - discount / 100)).toFixed(2);
}

// Convert rating to stars 
function getStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  let str = "★".repeat(fullStars);
  if (hasHalf) str += "½";
  str = str.padEnd(5, "☆");
  return str;
}

// Display product cards
function renderProducts(products) {
  productsContainer.innerHTML = "";
  if (!products.length) {
    productsContainer.innerHTML = `<p style="font-size:1.1em;padding:12px;color:#d12;">No products found.</p>`;
    return;
  }
  products.forEach(product => {
    const discounted = calcDiscountedPrice(product.price, product.discountPercentage);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-images">
        <img class="main-img" src="${product.images && product.images[0] ? product.images[0] : product.thumbnail}" alt="Main Image"/>
        <img class="thumbnail" src="${product.thumbnail}" alt="Thumbnail"/>
      </div>
      <div class="product-title">${product.title}</div>
      <div class="price-section">
        <span class="old-price">Rs. ${product.price}</span><br/>
        <span class="price">Rs. ${discounted}</span>
        <span class="discount">save ${product.discountPercentage.toFixed(2)}%</span>
      </div>
      <div class="rating">
        <span class="stars">${getStars(product.rating)}</span>
        <span class="rating-num">${product.rating.toFixed(1)}</span>
      </div>
      <button class="show-desc-btn">Show Description</button>
      <button class="add-cart-btn">Add to cart</button>
      <div class="description-container" style="display:none;">
        <div class="desc-text">${product.description}</div>
        <button class="less-desc-btn">Less Description</button>
      </div>
    `;

    // Toggle description
    const showDescBtn = card.querySelector(".show-desc-btn");
    const descContainer = card.querySelector(".description-container");
    const lessDescBtn = card.querySelector(".less-desc-btn");

    showDescBtn.addEventListener("click", () => {
      descContainer.style.display = "block";
      showDescBtn.style.display = "none";
    });
    lessDescBtn.addEventListener("click", () => {
      descContainer.style.display = "none";
      showDescBtn.style.display = "block";
    });

    productsContainer.appendChild(card);
  });
}

// Fetch the initial 15 products
async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE}?limit=15`);
    const data = await res.json();
    allProducts = data.products;
    filteredProducts = [...allProducts];
    renderProducts(filteredProducts);
  } catch (err) {
    productsContainer.innerHTML = "<p style='color:red;'>Failed to load products.</p>";
  }
}

// Fetch all categories 
async function fetchCategories() {
  try {
    const res = await fetch(API_CATEGORIES);
    const categories = await res.json();
    categoriesForm.innerHTML = categories.map(cat =>
      `<label><input type="radio" name="category" value="${cat.name}" /> ${cat.name}</label>`
    ).join('');
    // Attach event listeners
    Array.from(categoriesForm.elements).forEach(radio => {
      radio.addEventListener('change', async function() {
        if (this.checked) {
          selectedCategory = this.value;
          searchMode = false;
          searchInput.value = "";
          clearSearchBtn.style.display = "none";
          await fetchCategoryProducts(selectedCategory);
        }
      });
    });
  } catch (err) {
    categoriesForm.innerHTML = "<p style='color:red;'>Failed to load categories.</p>";
  }
}

// Fetch products by category
async function fetchCategoryProducts(category) {
  try {
    const res = await fetch(`${API_CATEGORY}${encodeURIComponent(category)}`);
    const data = await res.json();
    filteredProducts = data.products;
    renderProducts(filteredProducts);
  } catch (err) {
    productsContainer.innerHTML = "<p style='color:red;'>Failed to load products for this category.</p>";
  }
}

// Fetch products by search
async function fetchSearchProducts(query) {
  try {
    const res = await fetch(`${API_SEARCH}${encodeURIComponent(query)}`);
    const data = await res.json();
    searchProducts = data.products;
    renderProducts(searchProducts);
  } catch (err) {
    productsContainer.innerHTML = "<p style='color:red;'>Failed to search products.</p>";
  }
}

// Sorting logic
sortBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let productsToSort = searchMode ? searchProducts : filteredProducts;
    let sorted = [...productsToSort];
    if (btn.dataset.sort === "priceAsc") {
      sorted.sort((a, b) =>
        parseFloat(calcDiscountedPrice(a.price, a.discountPercentage)) -
        parseFloat(calcDiscountedPrice(b.price, b.discountPercentage))
      );
    } else if (btn.dataset.sort === "priceDesc") {
      sorted.sort((a, b) =>
        parseFloat(calcDiscountedPrice(b.price, b.discountPercentage)) -
        parseFloat(calcDiscountedPrice(a.price, a.discountPercentage))
      );
    } else if (btn.dataset.sort === "ratingDesc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    if (searchMode) searchProducts = sorted;
    else filteredProducts = sorted;
    renderProducts(sorted);
  });
});

// Search button logic
searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;
  searchMode = true;
  clearSearchBtn.style.display = "inline-block";
  await fetchSearchProducts(query);
});

// Clear search button logic
clearSearchBtn.addEventListener("click", () => {
  searchMode = false;
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  renderProducts(filteredProducts);
});

// Clear category selection
clearCategoriesBtn.addEventListener("click", () => {
  selectedCategory = "";
  searchMode = false;
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  // Uncheck radios
  categoriesForm.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
  filteredProducts = [...allProducts];
  renderProducts(filteredProducts);
});

window.addEventListener("DOMContentLoaded", async () => {
  await fetchProducts();
  await fetchCategories();
});
