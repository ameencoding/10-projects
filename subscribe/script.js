"use strict";

const btn = document.querySelector(".btn");
let subscribe = false;

btn.addEventListener("click", function () {
  if (subscribe) {
    this.textContent = "Subscribe";
    subscribe = false;
  } else {
    this.textContent = "Subscribed";
    subscribe = true;
  }
});
