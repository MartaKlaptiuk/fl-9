let amountOfMoney = parseFloat(prompt('Price without discount:', 0));
let discount = parseInt(prompt('Discount:', 0));


let output;

if (amountOfMoney <= 0 || discount <= 0) {
    output = 'Invalid data';
} else {
    amountOfMoney = +amountOfMoney.toFixed(2);

    let saved = Math.round(amountOfMoney / 100 * discount);
    let curentPrice = Math.round(amountOfMoney - saved);

    output = 'Price without discount: ' + amountOfMoney + '\n' + 'Discount: ' + discount + '%'
        + '\n' + 'Price with discount: ' + curentPrice + '\n' + 'Saved: ' + saved;
}

console.log(output);

