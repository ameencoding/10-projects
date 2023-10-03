"use strict";

const parent = document.querySelector(".container");
const phones = parent.querySelectorAll(".container .phone");
const bookMarks = parent.querySelectorAll(".icon");

const transformStyles = ["translateY(-25px)", "rotate(6deg)", "scale(1.1)"];

phones.forEach((phone) => {
  phone.addEventListener("click", function () {
    parent
      .querySelectorAll(".phone")
      .forEach((ph) => ph.classList.remove("active"));
    this.classList.add("active");
  });
});

bookMarks.forEach((mark) => {
  mark.addEventListener("click", function () {
    this.classList.toggle("fill");
  });
});
