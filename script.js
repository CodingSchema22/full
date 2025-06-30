
  // === FADE-IN ANIMATION ===
const fadeElements = document.querySelectorAll('.fade-in-element');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

// === LOGO AUTO SLIDER ===
const brand = document.querySelector('.brand');
const logos = document.querySelectorAll('.logo');
let logoIndex = 0;

function autoSlide() {
  if (!brand || logos.length === 0) return;
  const logoWidth = 170;
  logoIndex = (logoIndex + 1) % logos.length;
  brand.style.transform = `translateX(-${logoIndex * logoWidth}px)`;
}
setInterval(autoSlide, 2000);
const div = document.querySelector('.div');
const para = document.querySelectorAll('p');
let paraIndex = 0;

function autoSlide() {
  if (!div || para.length === 0) return;
  const paraWidth = 170;
  logoIndex = (paraIndex + 1) % para.length;
  div.style.transform = `translateX(-${paraIndex * paraWidth}px)`;
}
setInterval(autoSlide, 2000);

// === COMMENT SLIDER ===
const commentSlider = document.querySelector('.comments');
const comments = document.querySelectorAll('.comment');
let commentPos = 0;
const commentVisible = 3;
const commentWidth = 320;
const commentMax = comments.length - commentVisible;

document.querySelector('.left')?.addEventListener('click', () => {
  if (commentPos > 0) commentPos--;
  commentSlider.style.transform = `translateX(-${commentPos * commentWidth}px)`;
});

document.querySelector('.right')?.addEventListener('click', () => {
  if (commentPos < commentMax) commentPos++;
  commentSlider.style.transform = `translateX(-${commentPos * commentWidth}px)`;
});

// === FRAME SLIDER ===
const frameSlider = document.querySelector('.frames');
const frameItems = document.querySelectorAll('.frame');
let frameIndex = 0;
const frameVisible = 3;
const frameWidth = 320;
const frameMax = frameItems.length - frameVisible;

document.querySelector('.righ')?.addEventListener('click', () => {
  if (frameIndex > 0) frameIndex--;
  frameSlider.style.transform = `translateX(-${frameIndex * frameWidth}px)`;
});

document.querySelector('.lef')?.addEventListener('click', () => {
  if (frameIndex < frameMax) frameIndex++;
  frameSlider.style.transform = `translateX(-${frameIndex * frameWidth}px)`;
});


// === LOGIN / REGISTER TOGGLE ===
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const formWrapper = document.getElementById('formWrapper');

loginBtn?.addEventListener('click', () => {
  formWrapper.style.transform = 'translateX(0%)';
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});

registerBtn?.addEventListener('click', () => {
  formWrapper.style.transform = 'translateX(-50%)';
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});

// === PRODUCT IMAGE PREVIEW ===
const mainImage = document.getElementsByClassName('main-image');
document.querySelectorAll('.thumbnail-group img').forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
});

// === COLOR & SIZE SELECTION ===
document.querySelectorAll('.color-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
  });
});

document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// === CHECKBOX FILTER ===
document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  box.addEventListener('change', () => {
    const selected = Array.from(document.querySelectorAll('input[type="checkbox"]'))
      .filter(b => b.checked)
      .map(b => b.id);
    console.log("Selected checkboxes:", selected);
  });
});

// === PRICE SLIDER ===
const priceSlider = document.querySelector('input[type="range"]');
const priceDisplay = document.querySelector('.price-values span:last-child');

priceSlider?.addEventListener('input', () => {
  priceDisplay.textContent = `₹${priceSlider.value}`;
});

// === COLOR CIRCLE SELECTION ===
let selectedColors = [];
document.querySelectorAll('.color-circle').forEach(circle => {
  circle.addEventListener('click', () => {
    const color = circle.classList[1];
    if (selectedColors.includes(color)) {
      selectedColors = selectedColors.filter(c => c !== color);
      circle.style.outline = '';
    } else {
      selectedColors.push(color);
      circle.style.outline = '3px solid #007BFF';
    }
    console.log("Selected colors:", selectedColors);
  });
});

// === RESET FILTERS ===
document.querySelectorAll('.filter-group button').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.filter-group');

    group.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    const slider = group.querySelector('input[type="range"]');
    if (slider) {
      slider.value = 1320;
      priceDisplay.textContent = `₹1320`;
    }
    group.querySelectorAll('.color-circle').forEach(c => c.style.outline = '');
    selectedColors = [];
    console.log(`Reset group: ${group.querySelector('h3')?.textContent}`);
  });
});

// === PRODUCT TYPE SEARCH ===
document.getElementById('productTypeSearch')?.addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  document.querySelectorAll('#productTypeOptions .filter-option').forEach(option => {
    option.style.display = option.textContent.toLowerCase().includes(searchValue) ? 'block' : 'none';
  });
});











  // === NAVIGATION MENU TOGGLE ===
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdownToggles = document.querySelectorAll(".nav-item.dropdown > a");

    menuToggle?.addEventListener("click", () => {
      navMenu?.classList.toggle("active");
    });

    dropdownToggles.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = link.closest(".nav-item.dropdown");
        parent?.classList.toggle("active");
      });
    });
  });

//   // === FILTER SIDEBAR ===
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".filter-toggle");
    const filterSidebar = document.querySelector(".filter-sidebar");
    const container = document.querySelector(".productes");
    const icon = toggleBtn?.querySelector(".icon");

    toggleBtn?.addEventListener("click", () => {
      const isOpen = filterSidebar?.classList.toggle("active");
      container?.classList.toggle("with-filter", isOpen);
      if (icon) icon.textContent = isOpen ? "-" : "+";
    });
  });
//   // productpage
// const queryParams = new URLSearchParams({
//   name: product.name,
//   price: product.price,
//   image: product.image
// });
// window.location.href = `product-details.html?${queryParams.toString()}`;
// // === Read Product Data from URL ===
// const params = new URLSearchParams(window.location.search);
// const name = params.get("name");
// const price = params.get("price");
// const image = params.get("image");

// // === Update the Product Detail Section ===
// document.getElementById("productName").textContent = name;
// document.getElementById("productPrice").textContent = `₹${price}`;
// document.getElementById("productImage").src = image;
// // let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// function addToCartFromDetail() {
//   const existing = cartItems.find(item => item.name === name);
//   if (existing) {
//     existing.qty++;
//   } else {
//     cartItems.push({ name, price: parseFloat(price), qty: 1, image });
//   }
//   localStorage.setItem("cart", JSON.stringify(cartItems));
//   alert("Product added to cart!");
// }
// checkout
// const cartItems = JSON.parse(localStorage.getItem("cart")) || [];








































// === PRODUCT DATA ===
const products = [
  { id: 1, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 2, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 3, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 4, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 5, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 6, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 7, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 8, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  { id: 9, name: "Frames", price: 39.99, image: "AmberGray.jpg" },
  { id: 10, name: "Round Frames", price: 39.99, image: "AmberGray.jpg" },
  { id: 11, name: "Round Frames", price: 39.99, image: "AmberGray.jpg" },
  { id: 12, name: "Round Frames", price: 39.99, image: "AmberGray.jpg" },
  { id: 13, name: "Round Frames", price: 39.99, image: "AmberGray.jpg" },
  { id: 14, name: "Round", price: 39.99, image: "AmberGray.jpg" },
  { id: 15, name: "glasses", price: 39.99, image: "AmberGray.jpg" },
  { id: 16, name: "glasses.jpg", price: 39.99, image: "AmberGray.jpg" }
  // { id: 1, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 17, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 18, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 19, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 20, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 21, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 22, name: "Round Frames", price: 39.99, image: "glasses.jpg" },
  // { id: 23, name: "Round Frames", price: 39.99, image: "glasses.jpg" }
];

// === CART FUNCTIONALITY ===
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCounter() {
  document.querySelector(".cart-counter").textContent =
    cartItems.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const summary = drawer.querySelector(".cart-summary");
  summary.innerHTML = "";
  let subtotal = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.price * item.qty;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" width="50" height="50">
      <div>
        <p>${item.name}</p>
        <div class="qty-control">
          <button onclick="changeQty(${index}, -1)">-</button>
          <input type="text" value="${item.qty}" readonly>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <span class="remove" onclick="removeItem(${index})">×</span>
    `;
    summary.appendChild(itemDiv);
  });

  summary.innerHTML += `
    <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
    <p>Shipping: ₹5.00</p>
    <h3>Total: ₹${(subtotal + 5).toFixed(2)}</h3>
    <div class="shop-container">
      <button class="shop-button" id="check-out">
        <span class="shop-text">
          <a class="checkout-btn" href="checkout.html" onclick="saveCartToStorage()">Checkout</a>
        </span>
        <span class="shop-more"></span>
      </button>
    </div>
  `;
}

function addToCart(name, price, image) {
  const existing = cartItems.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cartItems.push({ name, price: parseFloat(price), qty: 1, image });
  }
  updateCartCounter();
  updateCartDrawer();
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function changeQty(index, change) {
  cartItems[index].qty += change;
  if (cartItems[index].qty <= 0) cartItems.splice(index, 1);
  updateCartCounter();
  updateCartDrawer();
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCartCounter();
  updateCartDrawer();
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function showTick(el) {
  el.classList.add("show-tick");
  setTimeout(() => {
    el.classList.remove("show-tick");
  }, 1500);
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "img-1";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-icons">
      <span class="icon" onclick="showTick(this)">
        <i class="fa-regular fa-heart icon-content"></i>
        <span class="tick-overlay"><i class="fa-solid fa-check"></i></span>
      </span>
      <span class="icon" onclick="showTick(this)">
        <i class="fa-regular fa-eye icon-content"></i>
        <span class="tick-overlay"><i class="fa-solid fa-check"></i></span>
      </span>
      <span class="icon" onclick="showTick(this); addToCart('${product.name}', ${product.price}, '${product.image}')">
        <i class="fa-solid fa-cart-shopping icon-content"></i>
        <span class="tick-overlay"><i class="fa-solid fa-check"></i></span>
      </span>
    </div>
    <div class="product-info">
      <h4>${product.name}</h4>
      <p class="price">₹${product.price}</p>
      <div class="shop-container">
        <button class="shop-button buy-now-button">
          <span class="shop-text">Buy Now</span>
          <span class="shop-more"></span>
        </button>
      </div>
    </div>
  `;

  card.querySelector(".buy-now-button").addEventListener("click", () => {
    const queryParams = new URLSearchParams({
      name: product.name,
      price: product.price,
      image: product.image
    });
    window.location.href = `product-details.html?${queryParams.toString()}`;
  });

  return card;
}

// === PRODUCT DETAIL PAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.getElementById("addToCartBtn");
  const buyNowBtn = document.getElementById("buyNowBtn");

  const productName = document.getElementById("productName").textContent;
  const productPrice = document.getElementById("productPrice").textContent;
  const productImage = document.getElementById("productImage").src;

  function addToCart(name, price, image) {
    const cartItem = { name, price, image };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCart(productName, productPrice, productImage);
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      addToCart(productName, productPrice, productImage);
      window.location.href = "checkout.html"; // create this file
    });
  }


});


// checkout page

  document.addEventListener("DOMContentLoaded", () => {
    const minusBtn = document.querySelector(".quantity-selector button:first-child");
    const plusBtn = document.querySelector(".quantity-selector button:last-child");
    const qtyInput = document.querySelector(".quantity-selector input");
    const priceEl = document.querySelector(".item-price");
    const subtotalEl = document.querySelector(".subtotal");
    const totalEl = document.querySelector(".total");
    const removeBtn = document.querySelector(".remove-item-btn");
    const placeOrderBtn = document.querySelector(".place-order-btn");

    const pricePerItem = parseInt(priceEl.dataset.price); // Rs2,000
    let quantity = parseInt(qtyInput.value);

    function updatePrices() {
      const subtotal = quantity * pricePerItem;
      subtotalEl.textContent = `Rs${subtotal.toLocaleString()}`;
      totalEl.textContent = `Rs${subtotal.toLocaleString()}`;
      priceEl.textContent = `Rs${subtotal.toLocaleString()}`;
    }

    plusBtn.addEventListener("click", () => {
      quantity++;
      qtyInput.value = quantity;
      updatePrices();
    });

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyInput.value = quantity;
        updatePrices();
      }
    });

    qtyInput.addEventListener("input", () => {
      let val = parseInt(qtyInput.value);
      if (isNaN(val) || val < 1) {
        val = 1;
      }
      quantity = val;
      qtyInput.value = quantity;
      updatePrices();
    });

    removeBtn.addEventListener("click", () => {
      document.querySelector(".order-item").remove();
      subtotalEl.textContent = "Rs0";
      totalEl.textContent = "Rs0";
    });

    placeOrderBtn.addEventListener("click", () => {
      localStorage.removeItem("cart");

      const inputs = document.querySelectorAll(".billing-form input[required]");
      let allFilled = true;


      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add("input-error");
          allFilled = false;
        } else {
          input.classList.remove("input-error");
        }
      });

      if (!allFilled) {
        alert("Please fill in all required fields.");
        return;
      }

      if (document.querySelector(".order-item")) {
        alert("✅ Order placed successfully!");
      } else {
        alert("❌ Your cart is empty.");
      }
    });

    updatePrices();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const checkoutContainer = document.getElementById("checkoutItems");
    const subtotalEl = document.querySelector(".subtotal");
    const totalEl = document.querySelector(".total");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateOverallTotal() {
      let newSubtotal = 0;

      document.querySelectorAll(".order-item").forEach(item => {
        const qty = parseInt(item.querySelector(".qty-input").value);
        const price = parseInt(item.querySelector(".item-price").dataset.price);
        newSubtotal += qty * price;
      });

      subtotalEl.textContent = `Rs${newSubtotal.toLocaleString()}`;
      totalEl.textContent = `Rs${newSubtotal.toLocaleString()}`;
    }

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "order-item";

      const itemTotal = item.price * item.qty;

      itemDiv.innerHTML = `
        <img src="${item.image}" width="80">
        <div>
          <p><strong>${item.name}</strong></p>
          <div class="quantity-selector">
            <button class="minus-btn">-</button>
            <input type="text" class="qty-input" value="${item.qty}" readonly>
            <button class="plus-btn">+</button>
          </div>
        </div>

        <p class="item-price" data-price="${item.price}">Rs${itemTotal.toLocaleString()}</p>
      `;

      checkoutContainer.appendChild(itemDiv);

      // Hook quantity buttons
      const plusBtn = itemDiv.querySelector(".plus-btn");
      const minusBtn = itemDiv.querySelector(".minus-btn");
      const qtyInput = itemDiv.querySelector(".qty-input");
      const priceEl = itemDiv.querySelector(".item-price");
      const pricePerItem = parseInt(priceEl.dataset.price);

      plusBtn.addEventListener("click", () => {
        let quantity = parseInt(qtyInput.value);
        quantity++;
        qtyInput.value = quantity;
        const updatedTotal = quantity * pricePerItem;
        priceEl.textContent = `Rs${updatedTotal.toLocaleString()}`;
        updateOverallTotal();
      });

      minusBtn.addEventListener("click", () => {
        let quantity = parseInt(qtyInput.value);
        if (quantity > 1) {
          quantity--;
          qtyInput.value = quantity;
          const updatedTotal = quantity * pricePerItem;
          priceEl.textContent = `Rs${updatedTotal.toLocaleString()}`;
          updateOverallTotal();
        }
      });
    });

    updateOverallTotal();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const placeOrderBtn = document.querySelector(".place-order-btn");

    placeOrderBtn.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".billing-form input[required]");
      let allFilled = true;

      // Highlight missing fields
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add("input-error");
          allFilled = false;
        } else {
          input.classList.remove("input-error");
        }
      });

      // Check if all required fields are filled
      if (!allFilled) {
        alert("❌ Please fill in all required fields before placing the order.");
        return;
      }

      // Check if cart is empty (no .order-item exists)
      if (!document.querySelector(".order-item")) {
        alert("❌ Your cart is empty.");
        return;
      }

      // ✅ Order success
      alert("✅ Order placed successfully!");
      localStorage.removeItem("cart");
      window.location.href = "thankyou.html"; // Optional: redirect
    });
  });
