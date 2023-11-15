"use strict";

const values = document.querySelectorAll("input");
const msg = document.querySelector(".msg");
const hint = document.querySelector(".hint");

values[0].focus();
values[0].classList.add("active");

const code = 2017;
const userInput = [];

values.forEach((val) => {
  val.addEventListener("input", function () {
    const reg = new RegExp("^[0-9]+$");
    const isNumber = reg.test(val.value);
    if (!isNumber) {
      val.value = "";
      return;
    } else {
      nextInput(val);
    }
  });
});

const nextInput = function (currentInput) {
  const next = currentInput.nextElementSibling;
  userInput.push(+currentInput.value);
  if (next === null) {
    validator();
    return;
  }
  currentInput.nextElementSibling.focus();
  values.forEach((v) => v.classList.remove("active"));
  currentInput.nextElementSibling.classList.add("active");
};

const validator = () => {
  if (code === +userInput.join("")) {
    setTimeout(() => {
      msg.classList.add("txt__color");
      msg.textContent = "Verified!";
      msg.style.visibility = "visible";
      hint.textContent = code;
    }, 1500);
  } else {
    setTimeout(() => (msg.style.visibility = "visible"), 1000);
  }
};

msg.querySelector("button").addEventListener("click", () => location.reload());
