/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//};
//array con los números posibles
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q"];
//array con los palos posibles
const palos = ["♦", "♥", "♠", "♣"];
//generar número aleatorio para los números de cartas
const getRandomNumber = numbers[Math.floor(Math.random() * numbers.length)];
const getRandomPalo = palos[Math.floor(Math.random() * palos.length)];
console.log(getRandomNumber);
console.log(getRandomPalo);
//generar número aleatorio para los palos
//función para generar palo y numero aleatorio
//
