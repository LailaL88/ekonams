/* Open mobile nav */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//AKTUALITATES EFFECTS

const el1 = document.querySelector(".spotlights__img-wrapper--one");
const el2 = document.querySelector(".spotlights__img-wrapper--two");
const img1 = document.querySelector(".spotlights__img--one");
const img2 = document.querySelector(".spotlights__img--two");
const text1 = document.querySelector(".heading3--one");
const text2 = document.querySelector(".heading3--two");

el1.addEventListener("mouseover", function () {
  img1.style.transform = "scale(1)";
  img1.style.transition = "0.9s ease";
  text1.style.transform = "translateY(30px)";
  text1.style.transition = "0.9s";
})

el2.addEventListener("mouseover", function () {
  img2.style.transform = "scale(1)";
  img2.style.transition = "0.9s ease";
  text2.style.transform = "translateY(30px)";
  text2.style.transition = "0.9s";
})

el1.addEventListener("mouseout", function () {
  img1.style.transform = "scale(1.1)";
  img1.style.transition = "0.1s";
  text1.style.transform = "translateY(0px)";
  text1.style.transition = "0.1s";
})

el2.addEventListener("mouseout", function () {
  img2.style.transform = "scale(1.1)";
  img2.style.transition = "0.1s";
  text2.style.transform = "translateY(0px)";
  text2.style.transition = "0.1s";
})

// MUTE/UNMUTE VIDEO

const video = document.querySelector(".header__video");
const soundBtn = document.querySelector(".header__img");

soundBtn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
})

// FOR MOBILE NAV DROPDOWN 

const buttons = document.querySelectorAll(".dropbtn");

for (let button of buttons) {
  button.addEventListener("click", function () {
    button.nextElementSibling.classList.toggle("block");
    button.classList.toggle("arrow-background");
    button.firstChild.classList.toggle("fa-caret-up");
  });
}