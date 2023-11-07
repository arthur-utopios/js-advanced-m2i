# Compte bancaire

- Écrivez une fonction CompteBancaire qui représente un compte bancaire, avec les attributs suivants :

  - titulaire : le nom du titulaire du compte, de type String.
  - solde : le solde du compte, de type Number.
  - La fonction CompteBancaire doit avoir un constructeur qui prend en paramètres le titulaire et le solde du compte, et qui initialise les attributs. La fonction
  - afficher() : affiche dans la console le nom du titulaire et le solde du compte.
  - crediter(montant) : ajoute le montant au solde du compte et affiche le nouveau solde.
  - debiter(montant) : soustrait le montant au solde du compte et affiche le nouveau solde.

- Écrivez ensuite une fonction CompteEpargne qui hérite de la fonction CompteBancaire, et qui ajoute un attribut taux de type Number.
- La fonction CompteEpargne doit avoir un constructeur qui prend en paramètres le titulaire, le solde et le taux du compte, et qui appelle le constructeur de la fonction parente.
- La fonction CompteEpargne doit aussi avoir une méthode interets() qui calcule et renvoie les intérêts du compte en fonction du solde et du taux.
