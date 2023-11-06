let monIdentificateurUnique = Symbol();

console.log(monIdentificateurUnique);

let id = Symbol("id");
console.log(id.toString());
console.log(id.description);

let article = {
    name: "tomate",
    // [id]: "mon-secret"
}

article[id] = "mon-id";

console.log("parcours des clés de l'objet");
for(key in article) {
    console.log(key);
}

console.log(article.id);

console.log(Symbol.for("id"));

console.log(article[id]);

let obj = {};
obj[Symbol.for("secret")] = "mon-secret";
let sym = Symbol.for("secret");
console.log(obj[sym]);
