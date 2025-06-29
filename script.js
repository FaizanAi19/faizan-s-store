let cart = [];

const products = [
  {
    name: 'iPhone 15 Pro Max',
    price: 249999,
    img: 'images/i phone.jfif',
    description: 'The iPhone 15 Pro Max features a titanium body, A17 Pro chip, and a 48MP camera system for stunning photos and performance.'
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    price: 229999,
    img: 'images/samsung.jfif',
    description: 'Samsung’s flagship phone with a 200MP camera, dynamic AMOLED display, and Snapdragon 8 Gen 3 chipset.'
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 59999,
    img: 'images/sony.jfif',
    description: 'Industry-leading noise cancellation headphones with premium sound, 30 hours battery life, and lightweight design.'
  },
  {
    name: 'MacBook Air M3',
    price: 219999,
    img: 'images/macbook.jfif',
    description: 'Apple’s thinnest and lightest MacBook, powered by the new M3 chip for blazing-fast performance and battery efficiency.'
  },
  {
    name: 'Dell XPS 13 Laptop',
    price: 189999,
    img: 'images/dell.jfif',
    description: 'Compact and premium Windows laptop with InfinityEdge display and 12th Gen Intel Core processors.'
  },
  {
    name: 'Apple Watch Series 9',
    price: 79999,
    img: 'images/apple watch.jfif',
    description: 'Advanced health tracking and improved performance in Apple Watch Series 9 with Always-On Retina display.'
  },
  {
    name: 'Fitbit Versa 4',
    price: 34999,
    img: 'images/fitbit versa.jfif',
    description: 'Fitness-focused smartwatch with heart rate tracking, sleep analysis, and over 40 exercise modes.'
  },
  {
    name: 'Canon EOS R50 Camera',
    price: 134999,
    img: 'images/canon.jfif',
    description: 'Mirrorless camera with high-speed autofocus and 24.2MP sensor for brilliant photo and video capture.'
  },
  {
    name: 'Nikon D5600 DSLR',
    price: 95499,
    img: 'images/nikon.jfif',
    description: 'DSLR camera with 39-point AF system and vari-angle touchscreen for versatile shooting.'
  },
  {
    name: 'PlayStation 5 Console',
    price: 159999,
    img: 'images/play station.jfif',
    description: 'Next-gen gaming console with ray tracing, ultra-fast SSD, and immersive DualSense controller.'
  },
  {
    name: 'Xbox Series X',
    price: 149999,
    img: 'images/x box.jfif',
    description: 'Powerful console with 4K gaming, fast load times, and a huge library via Xbox Game Pass.'
  },
  {
    name: 'HP LaserJet Pro Printer',
    price: 49999,
    img: 'images/hp printer.jfif',
    description: 'Efficient and compact monochrome printer ideal for small offices with wireless connectivity.'
  },
  {
    name: 'Logitech MX Master 3 Mouse',
    price: 24999,
    img: 'images/logitech mouse.jfif',
    description: 'Advanced productivity mouse with ergonomic design, app-specific customization, and MagSpeed scrolling.'
  },
  {
    name: 'JBL Flip 6 Bluetooth Speaker',
    price: 15999,
    img: 'images/jbl flip 6.jfif',
    description: 'Portable Bluetooth speaker with bold sound, deep bass, and IP67 waterproof rating.'
  },
  {
    name: 'Amazon Echo Dot (5th Gen)',
    price: 8999,
    img: 'images/amazon echo  dot.jfif',
    description: 'Smart speaker with Alexa voice assistant, improved audio quality, and compact design.'
  },
  {
    name: 'Mi Smart LED TV 55” 4K',
    price: 84999,
    img: 'images/MI tv.jfif',
    description: '4K Ultra HD Smart TV with PatchWall, Dolby Vision, and Google Assistant support.'
  },
  {
    name: 'Nike Air Max 270 Shoes',
    price: 29999,
    img: 'images/nike air max.jfif',
    description: 'Stylish and comfy lifestyle shoes with visible air unit and lightweight feel.'
  },
  {
    name: 'Adidas Ultraboost Shoes',
    price: 31999,
    img: 'images/adidas shoes.jfif',
    description: 'High-performance running shoes with responsive cushioning and sleek style.'
  },
  {
    name: 'Zara Men’s Casual Shirt',
    price: 3999,
    img: 'images/zara men.jfif',
    description: 'Trendy and comfortable shirt ideal for casual or semi-formal wear.'
  },
  {
    name: "Levi's 511 Slim Fit Jeans",
    price: 5999,
    img: 'images/levis jeans.jfif',
    description: 'Modern slim-fit jeans with stretch for all-day comfort and classic styling.'
  },
  {
    name: 'Gucci Leather Wallet',
    price: 19999,
    img: 'images/gucci wallet.jfif',
    description: 'Luxury leather wallet from Gucci with elegant design and multiple compartments.'
  },
  {
    name: 'Ray-Ban Aviator Sunglasses',
    price: 12999,
    img: 'images/ray ban sun glass.jfif',
    description: 'Iconic sunglasses with timeless aviator style and UV protection lenses.'
  },
  {
    name: 'Apple AirPods Pro (2nd Gen)',
    price: 44999,
    img: 'images/apple airpods.jfif',
    description: 'Wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging case.'
  },
  {
    name: 'Samsung Galaxy Tab S9',
    price: 114999,
    img: 'images/galaxy tab.jfif',
    description: 'Premium Android tablet with AMOLED display, S Pen support, and powerful performance.'
  },
  {
    name: 'OnePlus 12 5G Phone',
    price: 179999,
    img: 'images/one plus.jfif',
    description: 'Flagship killer with Snapdragon 8 Gen 3, fast charging, and fluid AMOLED screen.'
  },
  {
    name: 'Realme Buds Wireless 3',
    price: 4999,
    img: 'images/realme wireless buds.jfif',
    description: 'Budget-friendly wireless neckband with good battery life and bass boost mode.'
  },
  {
    name: 'Infinix Hot 40 Pro',
    price: 26999,
    img: 'images/hot 40 pro max.jfif',
    description: 'Affordable smartphone with large display, fast charging, and decent gaming performance.'
  },
  {
    name: 'TCL 43” Smart LED TV',
    price: 54999,
    img: 'images/tcl tv.jfif',
    description: 'Smart TV with full HD display, built-in apps, and Dolby Audio support.'
  },
  {
    name: 'Unilever Dove Body Wash',
    price: 899,
    img: 'images/dove body wash.jfif',
    description: 'Moisturizing body wash with gentle cleansers and signature Dove fragrance.'
  },
  {
    name: 'Nescafé Gold Coffee Jar',
    price: 2599,
    img: 'images/coffee jar.jfif',
    description: 'Premium instant coffee with smooth, rich aroma and superior blend of Arabica beans.'
  }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const clickedProductDiv = document.getElementById('clicked-product');
const clickedName = document.getElementById('clicked-name');
const clickedImg = document.getElementById('clicked-img');
const clickedPrice = document.getElementById('clicked-price');
const clickedDescription = document.getElementById('clicked-description');
const quantityInput = document.getElementById('quantityInput');
const buyBtn = document.querySelector('.buy-btn');
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total');
const cartItemsList = document.getElementById('cart-items');
const clearCartBtn = document.getElementById('clearCartBtn');
const searchInput = document.getElementById('searchInput');
const logoutBtn = document.getElementById('logoutBtn');
const slideshowImage = document.getElementById('slideshow-image');
const slideshowCaption = document.getElementById('slideshow-caption');

let currentProduct = null;
let slideshowIndex = 0;

// Check login on load
window.onload = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    alert('Please login first!');
    window.location.href = 'login.html';
    return;
  }

  // ✅ Insert welcome banner above slideshow
  if (!document.getElementById('welcomeBanner')) {
    const welcomeBanner = document.createElement('div');
    welcomeBanner.id = 'welcomeBanner';
    welcomeBanner.className = 'welcome-banner';
    welcomeBanner.textContent = "👋 Welcome to Faizan's Online Store! 🎉";
    const slideshow = document.getElementById('product-slideshow');
    document.body.insertBefore(welcomeBanner, slideshow);
  }

  startSlideshow();
  renderProducts();
  updateCartUI();
};

// Slideshow logic
function startSlideshow() {
  if (products.length === 0) return;

  setInterval(() => {
    const product = products[slideshowIndex];
    slideshowImage.src = product.img;
    slideshowCaption.textContent = product.name;

    slideshowIndex = (slideshowIndex + 1) % products.length;
  }, 3000); // Change image every 3 seconds
}

// Render products
function renderProducts(filter = '') {
  productsContainer.innerHTML = '';
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  if (filtered.length === 0) {
    productsContainer.innerHTML = '<p style="grid-column: span 4; text-align:center;">No products found!</p>';
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: Rs.${product.price.toLocaleString()}</p>
      <button>Add to Cart</button>
    `;
    div.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() !== 'button') {
        showClickedProduct(product);
      }
    });
    div.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product, 1);
    });
    productsContainer.appendChild(div);
  });
}

// Show clicked product details
function showClickedProduct(product) {
  currentProduct = product;
  clickedName.textContent = product.name;
  clickedImg.src = product.img;
  clickedImg.alt = product.name;
  clickedPrice.textContent = `Price: Rs.${product.price.toLocaleString()}`;
  clickedDescription.innerHTML = product.description;
  quantityInput.value = 1;
  clickedProductDiv.style.display = 'block';
}

// Add to cart
function addToCart(product, quantity) {
  const existingIndex = cart.findIndex(item => item.name === product.name);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ name: product.name, price: product.price, quantity });
  }
  updateCartUI();
  alert(`${product.name} added to cart!`);
}

// Update cart with ➕ ➖
function updateCartUI() {
  cartItemsList.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} x ${item.quantity} = Rs.${(item.price * item.quantity).toLocaleString()}
    `;

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.onclick = () => changeQuantity(item.name, 1);

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    minusBtn.onclick = () => changeQuantity(item.name, -1);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeFromCart(item.name);

    li.appendChild(plusBtn);
    li.appendChild(minusBtn);
    li.appendChild(removeBtn);

    cartItemsList.appendChild(li);
  });

  cartCount.textContent = count;
  totalPrice.textContent = total.toLocaleString();
}

function changeQuantity(name, delta) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCartUI();
}

// Buy Now
buyBtn.addEventListener('click', () => {
  if (!currentProduct) return alert('Please select a product first!');
  const qty = parseInt(quantityInput.value);
  if (isNaN(qty) || qty < 1) return alert('Please enter a valid quantity!');
  const totalCost = currentProduct.price * qty;
  const address = prompt(`📦 You want to buy:\n${currentProduct.name} (x${qty})\nTotal: Rs. ${totalCost.toLocaleString()}\n\n🏠 Please enter your delivery address:`);
  if (address && address.trim() !== '') {
    alert(`🎉 Thank you for your purchase!\nYour product will be delivered to:\n📍 ${address.trim()}`);
  } else {
    alert('Purchase cancelled: No address provided.');
  }
});

// Add to cart (clicked)
cartBtn.addEventListener('click', () => {
  if (!currentProduct) return alert('Please select a product first!');
  const qty = parseInt(quantityInput.value);
  if (isNaN(qty) || qty < 1) return alert('Please enter a valid quantity!');
  addToCart(currentProduct, qty);
});

// Search
searchInput.addEventListener('input', () => {
  renderProducts(searchInput.value);
});

// Clear cart
clearCartBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    updateCartUI();
  }
});

// Logout
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  alert('Logged out successfully!');
  window.location.href = 'login.html';
});
