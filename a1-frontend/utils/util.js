
function calculatePrice(quantity, price) {
    price = parseInt(price.split(' ')[1]);
    const total = quantity * price;
    return "Ξ " + total.toString();
}

export { calculatePrice };