function Cat(name, age, size) {
  this.name = name;
  this.age = age;
  this.size = size;
}

let monChat = new Cat("Garfield", 5, "2ft");

console.log(monChat);

function Product(id, name, price, quantity) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  // this.stockPrice = function() {
  //     return this.price * this.quantity;
  // }
}

Product.prototype.stockPrice = function () {
  return this.price * this.quantity;
};

let monProduit = new Product(1, "chaise", 30, 100);
console.log(monProduit.stockPrice());

let radiateur = {
    id: 1,
    marque: "Danfoss",
    chaleurMax: 120,
    toString() {
        return Object.entries(this).join(',');
    },
    valueOf() {
        return 3;
    }
}



console.log(+radiateur);
