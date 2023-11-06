let secret = "mon secret";

let username = "toto";

const SECRET_KEY = secret ? secret : "secret";
console.log(SECRET_KEY);

const SECRET_KEY_BIS = undefined || "secret";
console.log(SECRET_KEY_BIS);

document.addEventListener("click", (e) => {
  e.preventDefault();
    // Non optimisé car réaffecte la variable à chaque déclenchement de l'événement
  username = undefined || "secret";

  // Optimisé car si la variable est affectée, elle n'est pas réaffectée
  username ||= "secret";
});
