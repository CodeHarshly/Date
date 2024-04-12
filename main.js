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
  sendEmail("No1");
});
btnYes1.addEventListener("click", (e) => {
  btnNo1.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes1.style.display = "none";
  gif.style.display = "none";
  page1.style.display = "none";
  page4.style.display = "block";
  sendEmail("Yes1");
});

btnYes2.addEventListener("click", (e) => {
  btnNo2.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes2.style.display = "none";
  gif.style.display = "none";
  page2.style.display = "none";
  page4.style.display = "block";
  sendEmail("Yes2");
});
btnNo2.addEventListener("click", (e) => {
  page2.style.display = "none";
  page3.style.display = "block";
  sendEmail("No2");
});

function moveButton() {
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
  sendEmail("No3");
}

btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("click", moveButton);


btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  btnYes.style.display = "none";
  gif.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
  sendEmail("Yes3");
});

function sendEmail(answer) {
  // Replace 'YOUR_EMAIL_ADDRESS' with your actual email address
  fetch('https://formspree.io/f/meqypvep', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          answer: answer
      })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to send email');
      }
      console.log('Thank you for your feedback!');
  })
  .catch(error => {
      console.error('Error sending email:', error);
      console.log('An error occurred. Please try again later.');
  });
}
