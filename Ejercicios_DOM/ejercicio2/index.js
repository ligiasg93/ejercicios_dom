// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
  let nuevoH1= document.createElement("h1")
console.log(nuevoH1)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv= document.createElement("div")
let p = document.createElement("p")
newDiv.appendChild(p)
console.log(newDiv);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div =document.createElement("div")
let p2=""

for (let i= 0; i < 6; i++) {
  p2= document.createElement("p")
  div.appendChild(p2)}
document.body.appendChild(div);
console.log(div);
  

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pDinamic= document.createElement ("p")
let textoP= document.createTextNode("Soy dinámico!")
pDinamic.appendChild(textoP)
console.log(pDinamic);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let insertarTexto= document.querySelector(".fn-insert-here")
insertarTexto.textContent="Wubba Lubba dub dub"
console.log(insertarTexto);

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let nuevoUl= document.createElement("ul")
let li=""
for (let i = 0; i < apps.length; i++) {
  let nuevoLi=document.createElement("li")
  nuevoLi.textContent = apps[i];
  nuevoUl.appendChild(nuevoLi)
}
document.body.appendChild(nuevoUl);
console.log(nuevoUl);
//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eliminates=document.querySelectorAll(".fn-remove-me")
for (const eliminate of eliminates) {
  eliminate.remove()
  
}


//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.
let unDiv= document.createElement("div")
let otroDiv= document.createElement("div")
let enMedio=document.createElement("p")

unDiv.insertAdjacentElement('afterend', enMedio);



/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here*/

  document.querySelectorAll('.fn-insert-here').forEach(div => {
   
    div.insertAdjacentHTML('beforeend', '<p>Voy dentro!</p>')});