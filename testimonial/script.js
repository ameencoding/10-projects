"use strict";

const star = document.querySelector(".star svg");
const btnStar = document.querySelector(".star");

const slider = document.querySelector(".slider");
const imgContainer = document.querySelector(".card__image");
const arrows = document.querySelectorAll(".controllers button");

btnStar.addEventListener("click", function () {
  star.classList.toggle("like");
});

const data = [
  {
    id: 1,
    img: "https://i.ibb.co/bJCg8kf/img-3.jpg",
    isLiked: false,
    content:
      "With each new day, you have the chance to grow into a better version of yourself.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/7bkGh4r/img-2.jpg",
    isLiked: false,
    content:
      "Each and every morning you have the chance, to wake up and chase your dream.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/N3K2nDx/img-1.jpg",
    isLiked: false,
    content:
      "Never stop reading, because life won't stop teaching you something new.",
  },
];

const render = function (id = 1) {
  const searched = data.filter((d) => d.id == id);

  if (searched.length < 1) return (slider.textContent = "invalid ID");

  imgContainer.innerHTML = searched
    .map((s) => `<img src="${s.img}" /> `)
    .join("");
  slider.innerHTML = searched
    .map((search) => {
      return `<h3>Reminder</h3>
                  <p>${search.content}</p>`;
    })
    .join("");
};

let num = 1;

arrows[1].addEventListener("click", function () {
  if (num === data.length) num = 0;
  num++;
  console.log(num);
  render(num);
});

arrows[0].addEventListener("click", function () {
  if (num === 1) num = data.length + 1;
  num--;
  console.log(num);
  render(num);
});

// Defualt
render();
