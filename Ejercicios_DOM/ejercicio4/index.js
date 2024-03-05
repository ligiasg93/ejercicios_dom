//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const myButton=document.createElement("button")
myButton.id="btnToClick"
myButton.textContent="click aquí";
document.body.appendChild(myButton);
myButton.addEventListener("click", function(event) {
  console.log("Información del evento:", event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('input');

input.addEventListener('focus', function(event) {
    console.log('Valor del input al enfocar:', input.value);
});



/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/
input.addEventListener('input', function(event) {
  console.log('Valor del input al escribir:', input.value);
});
