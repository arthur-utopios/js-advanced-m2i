poke.addEventListener("submit", function (event) {

  event.preventDefault();
  let pokemon = input.value;

  let pokemonWorker = new Worker("./pokemon.js");

  pokemonWorker.postMessage(pokemon);

  pokemonWorker.onmessage = function(event) {
    displayPokemon(event.data);
  };
});

function displayPokemon(pokemon) {
  let string = `
    <h1>${pokemon.name.fr}</h1>
    <div>
        <img src=${pokemon.sprites.regular} alt=${pokemon.name.fr}>
    </div>
    <h2>
        <ul>
        ${pokemon.types.map((type) => {
          return `<li>${type.name}</li>`;
        })}
        </ul>
    </h2>
    `;
  display.innerHTML = string;
}
