function HangedMan(word, attempt) {
  this.word = word.toLowerCase();
  this.attempt = attempt;
  this.mask;
}

function generateMask() {
  this.mask = "*".repeat(this.word.length);
}

function isWon() {
  return this.word === this.mask;
}

function discoverLetter(letter) {
  let maskArray = this.mask.split("");
  for (let index = 0; index < this.word.length; index++) {
    if (letter === this.word[index]) {
      maskArray[index] = letter;
    }
  }
  this.mask = maskArray.join("");
}

function play() {
  this.generateMask();
  do {
    alert(this.mask);
    let letter = prompt("Saisir une lettre: ");
    this.discoverLetter(letter);

    if (this.isWon()) {
      alert(`Félicitions! Le mot à trouver était bien: ${this.word}`);
      break;
    }

    this.attempt--;
    if (this.attempt < 0) {
      alert("Vous avez perdu :(");
      break;
    }
  } while (true);
}

HangedMan.prototype.generateMask = generateMask;
HangedMan.prototype.discoverLetter = discoverLetter;
HangedMan.prototype.isWon = isWon;
HangedMan.prototype.play = play;

let hangedMan = new HangedMan("chips", 10);
hangedMan.play();
