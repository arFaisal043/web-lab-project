function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  let cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.innerText = count;
  }
}
updateCartCount();

function normalizeCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let newCart = [];
  cart.forEach((item) => {
    let existing = newCart.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      newCart.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      });
    }
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
  return newCart;
}

function displayCart() {
  let cart = normalizeCart();
  let cartItemsContainer = document.getElementById("cart-items");
  let totalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      let itemTotal = item.price * item.quantity;
      total += itemTotal;
      cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong> - $${item.price.toFixed(2)}
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="changeQuantity('${item.name}', -1)" class="btn-qty">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${item.name}', 1)" class="btn-qty">+</button>
                        <span class="item-total">$${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
            `;
    });
  }
  if (totalElement) {
    totalElement.innerText = total.toFixed(2);
  }
}

function changeQuantity(name, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find((i) => i.name === name);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.name !== name);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    displayCart();
  }
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
  displayCart();
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    clearCart();
  }
}

displayCart();
