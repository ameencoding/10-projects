/*
  V1
  How it works : this working fine in every situations.
*/
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

/*
   V2
   How it works : if you reach the end you can't start from 1,
   only you can click back Prev btn.
*/
arrows[1].addEventListener("click", function () {
  if (num === data.length) return;
  num++;
  console.log(num);
  render(num);
});

arrows[0].addEventListener("click", function () {
  if (num === 1) return;
  num--;
  console.log(num);
  render(num);
});
