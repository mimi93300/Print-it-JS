const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Recuperation de mes flèches à partir de mon HTML//
//récuperation de mes slides, légendes et source//

const leftArrow = document.querySelector(".arrow_left"); 
const rightArrow = document.querySelector(".arrow_right");

const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const baseUrl = "./assets/images/slideshow/";
let currentSlideIndex = 0;

//Récuperation élément html Variable pour les dots//
const dotsContainer = document.querySelector(".dots");

//tous les dots du DOM
let allDots;

console.log(allDots)

function main() {
  initDots();
  prevSlide();
  nextSlide();


}

main();

function initDots() {
  //Ajout des bullet point dynamique//
  slides.forEach((slide) => {
    //console.log(slide)
    const bulletPoint = document.createElement("span");
    bulletPoint.classList.add("dot");
    dotsContainer.appendChild(bulletPoint);
  });



  allDots = document.querySelectorAll(".dots .dot")
  //premier dots en selected
  allDots[currentSlideIndex].classList.add("dot_selected");

}

//Attachement des eventlistener aux flèches//

function prevSlide() {
  leftArrow.addEventListener("click", function () {

    //tous les dots du DOM
    allDots[currentSlideIndex].classList.remove("dot_selected");

    currentSlideIndex--;
    if (currentSlideIndex == -1) {
      currentSlideIndex = slides.length - 1;
      
    }
    //Mise à jour de l'image et du tagline selon la diapositive//
    imageSlide.src = baseUrl + slides[currentSlideIndex].image;
    tagLine.innerHTML = slides[currentSlideIndex].tagLine;
    allDots[currentSlideIndex].classList.add("dot_selected");

    console.log("J'ai cliqué sur la flèche gauche");
  });

}



function nextSlide() {
  rightArrow.addEventListener("click", function () {
    allDots[currentSlideIndex].classList.remove("dot_selected");
    currentSlideIndex++;
    if (currentSlideIndex == slides.length) {
      currentSlideIndex = 0
     
    }
    imageSlide.src = baseUrl + slides[currentSlideIndex].image;
    tagLine.innerHTML = slides[currentSlideIndex].tagLine;
    allDots[currentSlideIndex].classList.add("dot_selected");

    console.log("Jai cliqué sur la flèche droite");
  });
}