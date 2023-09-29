"use strict";

const numberOne = document.querySelector(".card__1");
const numberTwo = document.querySelector(".card__2");
const numberThree = document.querySelector(".card__3");

let num = 1;
let max = 10;

const timer = setInterval(function () {
  if (num > max) {
    clearInterval(timer);
    numberOne.classList.remove("rotate");
    numberTwo.classList.remove("scale");
    numberThree.classList.remove("opacity");
  } else {
    numberOne.textContent = num;
    numberOne.classList.add("rotate");

    numberTwo.textContent = num;
    numberTwo.classList.add("scale");

    numberThree.textContent = num;
    numberThree.classList.add("opacity");
  }
  num++;
}, 1200);
