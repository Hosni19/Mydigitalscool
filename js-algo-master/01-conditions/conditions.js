// Recherche et retourne le nombre le plus grand
function maximum2Nombres(nombre1, nombre2) {
    if (nombre1>nombre2){
        return nombre1;
    }  else {
        return nombre2;
    }
};

// Recherche et retourne le nombre le plus grand
function maximum3Nombres(nombre1, nombre2, nombre3) {
    if (nombre1>nombre2) {
        if (nombre1>nombre3){
            return nombre1;
        }
    } else if (nombre2>nombre3){
        return nombre2 ;
    }
    else{
        return nombre3;
    }
};

// Indique si le nombre est positif, négatif ou nul (== 0)
function signe(nombre) {
    if (nombre>0) {
        return 'positif';
    } else if(nombre==0){
        return 'nul';
    }
    else {
        return 'négatif';
    }
};

// Selon le nombre de côtés de même longueur,
// indique si un triangle est équilatéral, isocèle ou quelconque.
function typeTriangle(cote1, cote2, cote3) {
    if (cote1 == cote2 && cote2 == cote3) {
        return 'équilatéral';
    } else if (cote1 == cote2 || cote1 == cote3 || cote2 == cote3){
        return 'isocèle'
    }else {
        return 'quelconque';
    }
};

// Indique le nombre de valeurs identiques
function valeursIdentiques(nombre1, nombre2, nombre3) {
    if (nombre1 == nombre2 && nombre1 == nombre3){
        return 3;
    }else if (nombre1 == nombre2 || nombre2 == nombre3 || nombre3 == nombre1) {
        return 2;
    }else {
        return 0;
    }
};

// Selon le numéro choisi, indique le jour de la semaine correspondant
// en toutes lettres.
function jourDeLaSemaine(numeroJour) {
    
        let reponse = '';
        switch (numeroJour){
            case 1:
                reponse = 'lundi';
                break;
            case 2:
                reponse = 'mardi';
                break;
            case 3:
                reponse = 'mercredi';
                break;
            case 4:
                reponse = 'jeudi';
                break;
            case 5:
                reponse = 'vendredi';
                break;
            case 6:
                reponse = 'samedi';
                break;
            case 7:
                reponse = 'dimanche';
                break;
            default:
                reponse = 'erreur';
                break;
    
        }
        return reponse;
};

// Selon le mois renseigné, indiquer le nombre de jours qu'il y a dans ce mois.
function nombreJours(mois) {
    let reponse = '';
    let nombre31 = [1,3,5,7,8,10,12];
    let nombre30 = [4,6,9,11];
    if (nombre31.includes(mois)){
        reponse = 31;
    }else if (nombre30.includes(mois)){
        reponse = 30;
    }else{
        reponse = 28;
    }
    return reponse;
};

// Retourne vrai si le premier nombre est dans l'intervalle des deux suivants.
function intervalle(nombre1, nombre2, nombre3) {
    let reponse = '';
    if (nombre1>nombre2){
        if (nombre1>nombre3){
            reponse = false;
        }
        else {
            reponse = true;
        }
    }
    else if (nombre1>nombre3){
        if (nombre1>nombre2){
            reponse = false;
        }
        else {
            reponse = true;
        }
    }
    else {
        reponse = false;
    }
    return reponse;
};

// Un magasin de photocopies facture 0,10 € les dix premières photocopies,
// 0,09 € les vingt suivantes et 0,08 € au-delà.
// Retourne le prix total en fonction du nombre de photocopies.
function prixPhotocopies(nombre) {
    let reponse = '';
    if (nombre<=10){
        reponse = nombre * 0.10;
    }else if (nombre<=30) {
        reponse = 10*0.1 + (nombre-10)*0.09;
    }else{
        reponse = 10*0.1 + 20*0.09 + (nombre-30)*0.08;
    }
    return reponse;
};

// Dans une rue où se pratique le stationnement alternatif,
// du 1 au 15 du mois on se gare du côté des maisons ayant un numéro impair,
// et le reste du mois on se gare de l’autre côté.
// La fonction retourne vrai si l'on s'est garé du bon côté de la rue.
function stationnementAlternatif(jour, numeroMaison) {
    let reponse = '';
    if (jour<=15){
        if (numeroMaison%2 == 0){
            reponse = false;
        }
        else{
            reponse = true;
        }
    }
    else {
        if (numeroMaison%2 == 0){
            reponse = true;
        }
        else{
            reponse = false;
        }
    }
    return reponse;
};
