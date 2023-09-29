"use strict";
const content = document.querySelector(".content");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const num = parseInt(this.textContent);
    if (num === 1) content.style.transform = "scale(1)";
    if (num === 2) content.style.transform = "scale(1.2)";
    if (num === 3) content.style.transform = "scale(1.5)";
  });
});
