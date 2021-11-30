const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomLumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomLumber];
  color.textContent = colors[randomLumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
