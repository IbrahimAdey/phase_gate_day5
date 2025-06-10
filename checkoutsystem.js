const readline = require('readline');

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cart = [];

function askProduct() {
    rl.question("Enter product name (or 'done'): ", name => {
        if (name.toLowerCase() === 'done') return showInvoice();

        rl.question("Enter price: ", price => {
            rl.question("Enter quantity: ", quantity => {
                cart.push(new Product(name, parseFloat(price), parseInt(quantity)));
                askProduct();
            });
        });
    });
}

function showInvoice() {
    let total = cart.reduce((sum, p) => sum + p.getTotal(), 0);
    let vat = total * 0.075;
    let discount = total * 0.10;
    let finalTotal = total + vat - discount;

    console.log("\n=== SEMICOLON STORE INVOICE ===");
    cart.forEach(p => console.log({p.name} x{p.quantity} - {p.getTotal().toFixed(2)}));
    console.log(Subtotal: {total.toFixed(2)}\nVAT: {vat.toFixed(2)}\nDiscount: {discount.toFixed(2)}\nTotal Due: {finalTotal.toFixed(2)});
    rl.close();
}

askProduct();