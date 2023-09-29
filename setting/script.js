"use strict";

const card = document.querySelector(".card");
const sound = card.querySelector("#col_1");
const viberate = card.querySelector("#col_2");
const brigtness = card.querySelector("#col_3");
const save = card.querySelector(".save");

brigtness.addEventListener("input", function () {
  if (brigtness.value > 10) {
    save.textContent = "Save";
    card.style.opacity = `${brigtness.value}%`;
  }
});

save.addEventListener("click", function () {
  setTimeout(function () {
    save.textContent = "Saved";
  }, 1000);
});
