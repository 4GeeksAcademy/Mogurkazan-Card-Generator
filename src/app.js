/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Generar la carta aleatoria
  function getRandomCard() {
    //array con los números posibles
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q"
    ];
    const palos = ["♦", "♥", "♠", "♣"];
    palos[0] = '<span style="color:red;">' + palos[0] + "</span>"; // Diamantes
    palos[1] = '<span style="color:red;">' + palos[1] + "</span>"; // Corazones

    //generar números aleatorios
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    //X
    const numberItem = document.getElementById("number");
    const iconItem = document.getElementById("iconTop");
    const iconItemBottom = document.getElementById("iconBottom");

    const randomNumber = getRandomElement(numbers);
    const randomPalo = getRandomElement(palos);

    //imagen previa
    const imagenPrevia = document.getElementById("imagenPrevia");
    imagenPrevia.style.display = "none";

    numberItem.textContent = randomNumber;
    iconItem.innerHTML = randomPalo;
    iconItemBottom.innerHTML = randomPalo;

    //Cambiar estilos
    iconItem.style.fontSize = "80px";
    iconItem.style.maxHeight = "20%";
    iconItemBottom.style.fontSize = "80px";
    iconItemBottom.style.transform = "rotate(180deg)";
    numberItem.style.fontSize = "150px";
  }
  document.getElementById("baraja").addEventListener("click", getRandomCard);
};
