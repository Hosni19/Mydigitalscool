// Recherche et retourne le plus grand nombre.
// Utilise et ré-utilise la fonction maximum2Nombres() de la série "Conditions".
function maximum4nombres(nombre1, nombre2, nombre3, nombre4) {
return Math.max(nombre1,nombre2,nombre3,nombre4) ;
};

// Calcule l'écart en secondes entre 2 durées.
// Utilie et ré-utilie la fonction secondes() de la série "Basics".
function ecartDurees(heure1, minute1, seconde1,
  heure2, minute2, seconde2) {
    let temp1 = secondes(heure1,minute1,seconde1) ;
    let temp2 = secondes(heure2,minute2,seconde2) ;
    return Math.abs(temp1-temp2)
    
};

// Retourne vrai si l'année est bissextile, faux si elle ne l'est pas.
// Une année est bissextile si :
// - elle est multiple de 4;
// - elle n'est pas multiple de 100;
// - elle est multiple de 400;
// 2012 et 2400 sont bissextiles. 2010 et 2100 ne le sont pas.
function estBissextile(annee) {
  let multiple4 = (annee % 4 == 0);
  let multiple100 = (annee % 100 == 0);
  let multiple400 = (annee % 400 == 0);
  return multiple4 && !multiple100 || multiple400 


};

// Retourne le nombre de jours qu'il y a dans un mois donné.
// Si c'est le mois de février, il retourner 28 ou 29 selon si l'année est bissextile.
// Pour ce faire, utilise la fonction estBissextile() à bon escient.
function nombreJours(mois, annee) {
  let maxJours = ["erreur",31,28,31,30,31,30,31,31,30,31,30,31,31];
  let result= maxJours[mois];
  if (estBissextile(annee) && mois ==2){result = result +1 } ;
  return result

    
  

};

// Vérifie la validité d'une date et retourne vrai si la date valide, sinon faux.
// Ré-utilise les fonctions précédentes.
function dateValide(jour, mois, annee) {

   if (jour>31 || jour<1) return false 
   else if (mois>12 || mois<1) return false 
   else if (jour <=nombreJours(mois,annee)) return true 
   else return false 

 
 
  
};
