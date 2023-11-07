class CompteBancaire {
    constructor(titulaire, solde)  {
        this.titulaire = titulaire;
        this.solde = solde;
    }

    afficher() {
        console.log(`Identité: ${this.titulaire} solde: ${this.solde}€`);
    }

    crediter(montant) {
        this.solde += montant;
        this.afficher();
    }

    debiter(montant) {
        this.solde -= montant;
        this.afficher();
    }
}

class CompteEpargne extends CompteBancaire {
    constructor(titulaire, solde, taux) {
        super(titulaire, solde);
        this.taux = taux;
    }

    interets() {
        return this.solde < 0 ? Math.abs(this.solde * this.taux) : 0;
    }
}

let monCompte = new CompteEpargne('Moi', 30, 0.10);
monCompte.crediter(20);
monCompte.debiter(100);
console.log(monCompte.interets());