/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
const showMeButton= document.querySelector(".showme");
console.log(showMeButton);
const element =document.querySelector("#pillado")
console.log(element);
const showP=document.querySelectorAll("p")
console.log(showP);
const showPokemon= document.querySelectorAll(".pokemon")
console.log(showPokemon);
const testElement=document.querySelectorAll('[data-function="testMe"]')
console.log(testElement);
const thridElement =testElement[2] 
console.log(thridElement);