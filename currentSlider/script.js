"use strict";

const dots = document.querySelectorAll(".dots .dot");

let num = 0;

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    document
      .querySelectorAll(".dots .dot")
      .forEach((d) => d.classList.remove("active__dot"));

    num++;
    dot.classList.add("active__dot");
  });
});
