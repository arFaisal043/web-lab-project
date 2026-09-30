function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  let cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.innerText = count;
  }
}
updateCartCount();

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    if (!existingItem.quantity) existingItem.quantity = 1;
    existingItem.quantity += 1;
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " has been added to your cart!");
}

async function loadCoffees() {
  let coffees = [];
  try {
    const response = await fetch("../data/menu.json");
    coffees = await response.json();
  } catch (error) {
    console.error("Error loading coffees:", error);
  }
  renderCoffees(coffees);
}

function renderCoffees(coffees) {
  const list = document.getElementById("full-menu-list");
  if (!list) return;
  list.innerHTML = "";
  coffees.forEach((coffee) => {
    list.innerHTML += `
            <div class="menu-item">
                <img src="${coffee.image}" alt="${coffee.name}">
                <h3>${coffee.name}</h3>
                <p>৳${coffee.price}</p>
                <button onclick="addToCart('${coffee.name}', ${coffee.price})">Add to Cart</button>
            </div>
        `;
  });
}

loadCoffees();
