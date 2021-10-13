/*Iteración 1: Interacción con el DOM
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

let myButton = document.querySelector('.showme');
console.log(myButton);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
let myHone = document.querySelector('#pillado');
console.log(myHone);

/*1.3 Usa querySelector para mostrar por consola todos los p*/
let MyPes = document.querySelectorAll("p");
for (let i = 0; i < MyPes.length; i++) {
  console.log(MyPes[i].innerHTML);
  }

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/
let myPokemon = document.querySelectorAll('.pokemon');
for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].innerHTML);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
data-function="testMe".*/
let myHero = document.querySelectorAll("[data-function='testMe']");
for (let i = 0; i < myHero.length; i++) {
    console.log(myHero[i].innerHTML);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".*/
console.log(myHero[2].innerHTML);