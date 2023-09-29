"use strict";

const container = document.querySelector(".container");

const companies = [
  { name: "Samsung", logo: "https://i.ibb.co/stTDbcd/samsung.png" },
  { name: "Adidas", logo: "https://i.ibb.co/5LzwJcS/adidas.png" },
  { name: "Puma", logo: "https://i.ibb.co/0tH8yp8/puma.png" },
  { name: "Nike", logo: "https://i.ibb.co/pw9mfmt/nike.png" },
  { name: "Nike", logo: "https://i.ibb.co/H2PCjf8/premier.png" },
];

for (let x = 0; x <= 39; x++) {
  const el = document.createElement("div");
  el.classList.add("child");

  const img = document.createElement("img");

  img.src = companies.map((c) => c.logo)[
    Math.floor(Math.random() * companies.length)
  ];

  el.append(img);

  container.append(el);
}
