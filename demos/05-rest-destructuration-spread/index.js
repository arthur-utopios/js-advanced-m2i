// Rest parameters
function restParameters(...args) {
  args.forEach((arg) => console.log(arg));
}

const userCredentials = ["admin123", "motdepassedefoufurieux"];

// Destructuration de tableau
const [user, password] = userCredentials;
console.log(user, password);

const jeu = {
  name: "TicTacToe",
  pegi: "3+",
};

// Destructuration d'objet
const { name, pegi } = jeu;
console.log(name, pegi);

const magasin = {
  id: 12,
  brand: "jouet club",
};

// Spread operator: on répand les clés/valeurs
let magasinJeu = { ...jeu, ...magasin };
console.log(magasinJeu);

// utilisation des rests parameters pour répandre des paramètres
restParameters(...userCredentials);

let copy = [...userCredentials];

if (copy === userCredentials) {
  console.log("Copy est la même référence que userCredentials");
} else {
  console.log("Copy n'est la même référence que userCredentials");
}
