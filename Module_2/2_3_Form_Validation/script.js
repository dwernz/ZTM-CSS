function validateUsername() {
    let usernameInput = document.getElementById("username");
    let isValid = usernameInput.checkValidity();
    usernameInput.setAttribute('aria-invalid', !isValid);
}

function updateTotal() {
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseFloat(document.getElementById("quantity").value);
    let total = price * quantity;
    document.getElementById("total").value = '$' + total.toFixed(2);
}