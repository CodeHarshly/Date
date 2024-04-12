const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnYes1 = document.querySelector(".btn-yes1");
const btnYes2 = document.querySelector(".btn-yes2");
const btnNo = document.querySelector(".btn-no");
var gif = document.getElementById("gif");
const btnNo1 = document.querySelector(".btn-no1");
const btnNo2 = document.querySelector(".btn-no2");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}
btnNo1.addEventListener("click", (e) => {
  page1.style.display = "none";
  page2.style.display = "block";
});
btnYes1.addEventListener("click", (e) => {
  btnNo1.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes1.style.display = "none";
  gif.style.display = "none";
  page1.style.display = "none";
  page4.style.display = "block";
});

btnYes2.addEventListener("click", (e) => {
  btnNo2.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes2.style.display = "none";
  gif.style.display = "none";
  page2.style.display = "none";
  page4.style.display = "block";
});
btnNo2.addEventListener("click", (e) => {
  page2.style.display = "none";
  page3.style.display = "block";
});

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes.style.display = "none";
  gif.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
});

