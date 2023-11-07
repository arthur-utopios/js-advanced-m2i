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
    return Object.entries(this).join(",");
  },
  valueOf() {
    return 3;
  },
};

console.log(+radiateur);

function Instrument(nom, type) {
  this.nom = nom;
  this.type = type;
}

Instrument.prototype.jouer = function () {
  console.log("Jouer");
};

function Guitare(nom, type, texture) {
  Instrument.call(this, nom, type);
  this.texture = texture;
}

Guitare.prototype = Object.create(Instrument.prototype);

let maGuitareFender = new Guitare(
  "Fender Strato400",
  "Instrument à cordes",
  "Lisse"
);

new Instrument("toto", "tata").jouer();

console.log(maGuitareFender.nom);
maGuitareFender.jouer();
