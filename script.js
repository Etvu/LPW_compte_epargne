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
ajouterOperation("depot", depot)

retirerArgent(retrait)
ajouterOperation("retrait", retrait)

ajouterInteret(TAUXINTERET)
ajouterOperation("interet", TAUXINTERET)

ajouterArgent(nouveauDepot)
ajouterOperation("depot", nouveauDepot)

retirerArgent(nouveauRetrait)
ajouterOperation("retrait", nouveauRetrait)

ajouterInteret(TAUXINTERET)
ajouterOperation("interet", TAUXINTERET)


console.log(tab)
function ajouterArgent(montant){
    if (montant>=0){
        solde= solde+montant
        console.log("Vous avez déposé " + montant + " euros. Nouveau solde : "+solde+ " euros.")
    }else{
        console.log("Montant négatif, transaction impossible")
    }
    
    return solde
}

function retirerArgent(montant){
    if (montant>=0){
        if(solde>=retrait){ //si solde suffisant on retire
            solde= solde-montant
            console.log("Vous avez retiré " + retrait + " euros. Nouveau solde : "+solde+ " euros.") //premier retrait
            
        }else{
            console.log("Solde insuffisant pour effectuer ce retrait.")
        } 
    }else{
        console.log("Montant négatif, transaction impossible")
    }
    return solde
}
function ajouterInteret(TAUXINTERET){
    interet = solde*TAUXINTERET //calcul interet
    solde = interet+solde //ajoute interet au solde
    console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : "+ solde.toFixed(2) + "euros.") 
    return TAUXINTERET
}
function ajouterOperation(type, montant) {
    tab.push({
        type: type,
        montant: montant,
        date: new Date().toLocaleString()
    });
}
