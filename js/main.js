/*----------------------Les commentaires-------------------------*/


// Un commentaire en Javascript

/* 
Un commentaire multiligne en Javascript 
*/



/*----------------------Affichage-----------------------------*/

//Afficher des informations dans la console de debbugage du navigateur 
console.log('Hello, world!');

//Afficher une boite de dialogue avec champs à remplir

//let response = prompt('Quel est votre age?');
//console.log(response)

/*--------------------Les variables-------------------------------*/
// Declaration d'un variable 
let uneVariable; 

// Affectation d'une variable 
uneVariable = 'Je suis une variable!';

console.log(uneVariable)

//Les 2 se font généralement en meme temp
//Les variables sont sensible  à la casse

let helloWorld = 'Hello, world!';
console.log('helloworld');


uneVariable = 'Je suis une variable!';
console.log('helloworld');
18

//Les diffèrents types de variables
let messages = 'un message';
let number = 20;
let decimal = 20.5; 
let boolean = true;
let boolean2 = false; 


//Les opération arithmétiques (+; -; *; /)
// Déclarer 3 varables sum, number1, number2
//Affecter le nombre 10 à number1
//Affecter le nombre 20 à number2
//Affecter le sum l'opération de multiplication des 2 variables précédentes 

//Correction du cas pratique

let sum;
let number1 = 10
let number2 = 20
sum = number1 * number2
console.log(sum); 




/*---------------------La concatenation--------------*/
let firstName = 'Issa';
let lastName = 'KONTE';


//  
console.log("Je m'appelle" + firstName + lastName); 

// Déclarer une variable city, afficher le message j'adore vivre à <city>.

let city ='PARIS'
City ="PARIS"
City =`PARIS`


console.log("J'adore vivre à " + city);
console.log('J\'adore vivre à ' + city);

// Modifier le mesage pour afficher j'adore vivre à <city> et je m'appelle <firstNAme> <lastName>

console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`);

/*------------------Instructions conditionnelles--------------*/

// Demander à l'utilisateur s'il accept les cgv

let agree = prompt('acceptez-vous les cgv?');
//console.log(agree);

// si, sionon (if, else)
if (agree =='ok'){
    console.log('vous avez acceptez');
} else { 
    console.log("vous n'avez pas acceptez les conditions!");   
}

// si, si non si, sinon
// si il repond yess
// vous etes redirigé vers le site en anglais 
// sinon si il repond oui 
// vous etes redirigé vers le site en français 
// sinon da 
// vous etes redirigé vers le site en russe
// sinon
// vous ne pouvez pas accederau site

if (agree == 'yess'){
console.log('vous etes redirigé vers le site en anglais');
} else if(agree == 'oui') {
    console.log('vous etes redirigé vers le site en français');
} else if (agree == 'da') {
    console.log('vous etes redirigé vers le site russe');
} else { 
    console.log('vous ne pouvez pas acceder au site');
}
console.log('la suite...');

/*------------------Les opérateurs de compararaison---------*/

// ==, >, >=, <, <=, !=, ===
// Déclarer un variable qui s'appelle variable, lui assigner la valeur 16
// si la variable est égale à 16 afficher félicitation 

// correction du cas 
let variable = '16'
if (variable == '16') {
console.log('félicitation');
}


//Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur  quel film il peut aller voir .
// "Action Man" si moins de 13 ans 
// "Matrix" si il a entre 13 et 18 ans 
// "Evil Dead" si plus de 18 ans 


//correction

//let garçon = prompt('Quel est ton age?');

// if (age <'13') {
//     console.log('Action Man');
// } else if (age >= '13'|| age <='18') {
//     console.log('Matrix');
// } else if(age > 18) {
//     console.log('Evil Dead');
// }


// Demander à l'utilisateur  son age
// Demande sa nationalité 

// si il est français Et qu'il a plus de 18 ans OU s'il est etranger et qu'il a moins de 18 ans
// Assistance juridique gratuite 

// correction

//let age = prompt('Quel est ton age?');
//let nationalité = prompt('ton nationalité');



//if (nationalité == "français" && age >= 18  ||
 //nationalité != "français" && age < 18 )
   {
//console.log('Assistance juridique gratuit');
}


// Demander sa nationalité
// si il est français 
// Demander à l'utilisateur son age 
// si il a plus de 18 ans 
// Droit aux APL


// let nationalité = prompt('Quel est votre nationalité');
// console.log('nationalité');

// if (nationalité == 'français') {
    // let age = prompt('Quel est votre age?');
// if (age >= 18) {
// console.log('vous avez droit aux APL');
// } else {
   //  console.log('refusé');
// }

    // console.log('aucun droit');





/*------------------------ Les boucles --------------------------*/

// les boubles sont des structures permettant d'excuter plusieurs fois des instructions 
// Permet a repeter les instructions  

// Boucle à itération non definies (while)
let i = 0;
while (i < 9) {
    i = i + 1; 
    console.log(i);
}

// Afficher la table de multiplication de 7

let f = 0;
while (f < 10) {
    let res = f * 7;

console.log(`${f} * 7 = ${res}`);
f = f + 1; 
}

