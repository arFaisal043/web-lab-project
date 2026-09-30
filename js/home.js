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
    const response = await fetch("../data/coffees.json");
    coffees = await response.json();
  } catch (error) {
    console.error("Error loading coffees:", error);
    // Fallback if running via file:// without a server
    coffees = [
      {
        id: 1,
        name: "Espresso",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80",
      },
      {
        id: 2,
        name: "Latte",
        price: 350,
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
      },
      {
        id: 3,
        name: "Cappuccino",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=500&q=80",
      },
      {
        id: 4,
        name: "Americano",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80",
      },
      {
        id: 5,
        name: "Mocha",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80",
      },
      {
        id: 6,
        name: "Macchiato",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
      },
    ];
  }
  renderCoffees(coffees);
}

function renderCoffees(coffees) {
  const list = document.getElementById("featured-menu-list");
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
