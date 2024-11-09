const TAUXINTERET =  0.03
let solde =  1000
let depot = 200
let retrait = 150
let nouveauDepot = 500
let nouveauRetrait = 800
let interet
let tab = []
/*
solde = solde+depot 
console.log("Vous avez déposé " + depot + "euros. Nouveau solde : "+solde+ " euros.") //premier depot

if(solde>=retrait){ //si solde suffisant on retire
    solde= solde-retrait
    console.log("Vous avez retiré " + retrait + " euros. Nouveau solde : "+solde+ " euros.") //premier retrait
}else{
    console.log("Solde insuffisant pour effectuer ce retrait.")
} 

interet = solde*TAUXINTERET //calcul interet

solde = interet+solde //ajoute interet au solde

console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde + "euros.") 

solde = solde+nouveauDepot

console.log("Vous avez déposé " + nouveauDepot + "euros. Nouveau solde : "+solde+ " euros.")

solde = solde-nouveauRetrait

console.log("Vous avez retiré " + nouveauRetrait + " euros. Nouveau solde : "+solde+ " euros.")

interet = solde*TAUXINTERET 
solde = interet+solde
console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde + "euros.") 
*/


ajouterArgent(depot)
tab[0] = "depot de "+depot
retirerArgent(retrait)
tab[1] = "retrait de "+retrait
ajouterInteret(TAUXINTERET)
tab[2] = "calcul interet de "+TAUXINTERET
ajouterArgent(nouveauDepot)
tab[3] = "retrait de "+nouveauDepot
retirerArgent(nouveauRetrait)
tab[4] = "retrait de "+nouveauRetrait
ajouterInteret(TAUXINTERET)
tab[5] = "calcul interet de "+TAUXINTERET
console.log(tab)
function ajouterArgent(montant){
    solde= solde+montant
    console.log("Vous avez déposé " + montant + " euros. Nouveau solde : "+solde+ " euros.")
    return solde
}

function retirerArgent(montant){
    if(solde>=retrait){ //si solde suffisant on retire
        solde= solde-montant
        console.log("Vous avez retiré " + retrait + " euros. Nouveau solde : "+solde+ " euros.") //premier retrait
        return solde
    }else{
        console.log("Solde insuffisant pour effectuer ce retrait.")
    } 
}
function ajouterInteret(TAUXINTERET){
    interet = solde*TAUXINTERET //calcul interet
    solde = interet+solde //ajoute interet au solde
    console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde + "euros.") 
    return TAUXINTERET
}
