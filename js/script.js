/*
- preparare un array di path di immagini
- preparare gli elementi in js corrispondenti agli elementi html
- memorizzare una variabile di indice
-> alla pressione del pulsante "up"
  ° aumentare il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
-> alla pressione del pulsante "down"
  ° diminuire il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
*/


// - preparare un array di path di immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
];

// - preparare gli elementi in js corrispondenti agli elementi html
const upArrowElement = document.getElementById("up-arrow");
const downArrowElement = document.getElementById("down-arrow");
const activeImgElement = document.getElementById("carousel-active-img");
const dotsContainerElement = document.getElementById("dots-container");


// // genero i pallini  
// for(let i = 0; i < images.length; i++) {
//   // genero un elemento html di tag <div>
//   let newDot = document.createElement('div');
//   // ci aggiungo la classe "dot", necessaria per la stilizzazione
//   newDot.classList.add("dot");
//   // lo imposto come figlio di dotsContainerElement
//   dotsContainerElement.append(newDot);
// }


// - memorizzare una variabile di indice
let index = 0;

// inizio inserendo dentro il parametro src il valore della prima immagine dall'array
activeImgElement.src = images[index];


// prendo tutti i dots
// const dotElements = document.querySelectorAll('.dot');
// aggiungo al primo la classe "active"
// dotElements[index].classList.add("active");



downArrowElement.addEventListener("click", function () {

  //   ° aumentare il valore dell'indice di un'unità
  index++;
  // dotElements[index].classList.add("active");


  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)

  
  // aggiungiamo la classe active al pallino corrispondente all'indice
  // dotElements[index - 1].classList.remove("active");

});


upArrowElement.addEventListener("click", function () {
  
  //   ° diminuire il valore dell'indice di un'unità
  index--;
  // dotElements[index].classList.add("active");


  //   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
  activeImgElement.src = images[index];

  console.log(index)

  
  // aggiungiamo la classe active al pallino corrispondente all'indice
  // dotElements[index + 1].classList.remove("active");

});