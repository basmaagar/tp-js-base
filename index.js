
import message, { PI, carre } from "./mathUtils.js";
message(); 
console.log("PI =", PI); 
console.log("Carré de 5 =", carre(5)); 


// EXERCICE 1 
var x = 5; // Portée de fonction
let y = 10; // Portée de bloc, réassignable 
const z = 15; // Portée de bloc, NON réassignable 

// Réassignation
x = 6;  // OK. 
y = 11; // OK. 
// z = 16; // ERREUR assignment to constant variable. 
// z est une constante donc sa valeur initiale ne peut pas être changée.
console.log(`x: ${x}, y: ${y}`);
// EXERCICE 2 : Portée (Scope) 
function testScope() {
  if (true) {
    var a = "var visible partout"; 
    let b = "let visible ici seulement"; 
  }

  console.log('a (var) :', a); 

  // console.log('b (let) :', b); // ERREUR : ReferenceError: b is not defined 
  // b n'est pas visible ici car le let utilisé est limité au bloc if où il a été déclaré 
}
testScope();
// EXERCICE 3 : Fonctions 
function sayHello(name) {
  return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log('Classique:', sayHello("Basma"));
console.log('Fléchée:', sayHelloArrow("Racha"));
// le comportement est identique pour cet appel simple.

// EXERCICE 4 :
const person = {
  name: "Basma", 
  sayHello: function () {
    console.log("Classique: Bonjour " + this.name); // 'this' fait référence à 'person'.
  },
  sayHelloArrow: () => {
    console.log("Fléchée: Bonjour " + this.name); // 'this' fait référence à la portée globale (où 'name' n'existe pas ou est undefined).
  },
};

person.sayHello();  
person.sayHelloArrow();
console.log('---');

// EXERCICE 5 
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi"); 
fruits.pop();         
console.log(fruits); // affiche : [ 'pomme', 'banane', 'orange' ] 

// EXERCICE 6 
const nums = [1, 2, 3, 4, 5]
console.log('Map (x * 2):', nums.map(n => n * 2)); // Affiche : [ 2, 4, 6, 8, 10 ]
console.log('Filter (pairs):', nums.filter(n => n % 2 === 0)); // Affiche : [ 2, 4 ]
console.log('Reduce (somme):', nums.reduce((sum, n) => sum + n, 0)); // Affiche : 15

// EXERCICE 7 
console.log('Find (> 3):', nums.find(n => n > 3)); // Affiche : 4
console.log('Some (< 0):', nums.some(n => n < 0)); // Affiche : false
console.log('Every (> 0):', nums.every(n => n > 0)); // Affiche : true

// EXERCICE 8 
const user = { id: 1, name: "Ali", city: "Rabat" }; 
const { name, city } = user;
console.log(`Déstructuration: ${name} habite à ${city}`); // Affiche : Ali habite à Rabat 
const { name: fullName, ...rest } = user;
console.log('Renommage:', fullName); // Affiche : Ali 
console.log('Rest (autres props):', rest); // Affiche : { id: 1, city: 'Rabat' } 

//EXERCICE 9
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000); 
});

// Le .then() s'exécute lorsque la promesse est résolue 
p.then(result => console.log('Promise Result:', result));
// Affiche : Promise Result: Opération terminée ! (Après 2 secondes)
console.log("Le code synchrone continue à s'exécuter immédiatement.");
// EXERCICE 10
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
   const data = await res.json();
    
    // Affiche le tableau d'utilisateurs. 
    console.log('Async/Await Result (1er utilisateur):', data[0]); 

  } catch (e) {
    // Gère les rejets (erreurs) de Promesse. 
    console.error("Erreur :", e.message); 
  }
}

getUsers(); 
// EXERCICE 11
const nom = "Fakhr"; 
const hour = new Date().getHours(); 
console.log(`Bonjour ${nom}, il est ${hour}h`); 

// EXERCICE 12
const arr1 = [1, 2]; 
const arr2 = [...arr1, 3, 4];
console.log('Spread Array:', arr2); // Affiche : [ 1, 2, 3, 4 ]

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0); 
}
console.log('Rest Args Sum:', sum(1, 2, 3, 4)); // Affiche : 10 
console.log('---');


// EXERCICE 13 
// Nullish Coalescing (??) : Fournit une valeur par défaut si l'opérande est null ou undefined. 
const settings = { theme: null };
console.log('Nullish (null):', settings.theme ?? "light"); // Affiche : light 
// Optional Chaining (?.) : Permet d'accéder à des propriétés sans vérification explicite de l'existence.
const user2 = { profile: { email: "x@y.com" } };
console.log('Optional Chaining (existe):', user2.profile?.email); // Affiche : x@y.com 
// S'arrête et retourne 'undefined' si l'objet intermédiaire ('address') n'existe pas. 
console.log('Optional Chaining (n\'existe pas):', user2.address?.city); // Affiche : undefined
//

const produits = [ 
    { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
    { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
    { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date(); 

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);

const total = valides.reduce((s, p) => s + p.prix, 0); 

console.log("Produits valides :", valides); 
console.log("Total :", total, "DH"); 