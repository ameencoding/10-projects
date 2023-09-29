"use strict";

const slider = document.querySelector(".sliders");
const sliders = document.querySelectorAll(".sliders img");

const buttons = document.querySelectorAll(".controllers button");

const maxLength = sliders.length;
let count = 0;

buttons[1].addEventListener("click", function () {
  count++;
  if (count === maxLength) count = 0;
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(-${count * 100}%)`;
  });
});

buttons[0].addEventListener("click", function () {
  if (count === 0) count = maxLength;
  count--;
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(-${count * 100}%)`;
  });
});
