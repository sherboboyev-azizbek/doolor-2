let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");

let elResultHuman = document.querySelector(".js-human");
let elResultBicycle = document.querySelector(".js-bicycle");
let elResultCar = document.querySelector(".js-car");
let elResultPlane = document.querySelector(".js-plane");

const humanSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   let elInputText = elInput.value;

   function sum(x) {
      
      elResultHuman.textContent = Math.round(elInputText / humanSpeed);
      elResultBicycle.textContent = Math.round(elInputText / bicycleSpeed);
      elResultCar.textContent = Math.round(elInputText / carSpeed);
      elResultPlane.textContent = elInputText / planeSpeed;
     
   }
   sum ()
   

   



})

