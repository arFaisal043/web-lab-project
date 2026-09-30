function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = count;
    }
}
updateCartCount();

function sendMessage() {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    if (name.trim() !== '' && message.trim() !== '') {
        alert("Thank you " + name + "! Your message has been sent.");
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Please enter both your name and a message.");
    }
}
