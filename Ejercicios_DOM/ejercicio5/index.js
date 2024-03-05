/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const contenedor=document.getElementById("miContenedor");

const lista=document.createElement("ul")
//iterar sobre el array
albums.forEach(album => {
  const nuevoLi=document.createElement("li")

    nuevoLi.textContent=album
    lista.appendChild(nuevoLi)
});
contenedor.appendChild(lista);

