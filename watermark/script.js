"use strict";

const container = document.querySelector("body");

for (let x = 0; x < 100; x++) {
  const el = document.createElement("div");
  el.classList.add("child");

  el.textContent = "Copyright";

  container.append(el);
}
