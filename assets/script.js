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
//récuperation de mes slides//

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
//const baseUrl = "./assets/images/slideshow";A verifier//
let currentSlideIndex = 0;

//Récuperation élément html Variable pour les dots//
const dotsContainer = document.querySelector(".dots");

//Ajout des bullet point dynamique//
slides.forEach((slide) => {
  slide.bullet = document.createElement("span");
  slide.bulletPoint.classList.add("dot  dotsContainer.appendChild(slide.bulletPoint);
});

slides[0].bulletPoint.classList.add("dot_selected");

//Attachement des eventlistener aux flèches//

leftArrow.addEventListener("click", function () {
	slides[currentSlideIndex].bulletPoint.classList.remove("dot_selected");
	currentSlideIndex--;
	if (currentSlideIndex == -1) {
	  currentSlideIndex = slides.length - 1;	
    console.log("J'ai cliqué sur la flèche gauche");
	}
  //Mise à jour de l'image et du tagline selon la diapositive//
	imageSlide.src =
	  "./assets/images/slideshow/" + slides[currentSlideIndex].image;
	tagLine.innerHTML = slides[currentSlideIndex].tagLine;
	slides[currentSlideIndex].bulletPoint.classList.add("dot_selected");
});

rightArrow.addEventListener("click", function () {
  slides[currentSlideIndex].bulletPoint.classList.remove("dot_selected");
  currentSlideIndex++;
  if (currentSlideIndex == slides.length) {
	currentSlideIndex = 0	
  console.log("Jai cliqué sur la flèche droite");
  }
  imageSlide.src =
    "./assets/images/slideshow/" + slides[currentSlideIndex].image;
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;
  slides[currentSlideIndex].bulletPoint.classList.add("dot_selected");
});
