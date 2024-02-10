const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Recuperation de mes flèches à partir de mon HTML//

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');


//Attachement des eventlistener aux flèches//

leftArrow.addEventListener('click', function(event) {
	console.log('Flèche de gauche cliquée');
	// Code à exécuter lorsque la flèche de gauche est cliquée
	if (event.target === leftArrow) {
		console.log('Flèche de gauche cliquée');
	}
 });

 rightArrow.addEventListener('click', function(event) {
	console.log('Flèche de droite cliquée');
	// Code à exécuter lorsque la flèche de droite est cliquée
	if (event.target === rightArrow) {
		console.log('Flèche de droite cliquée');
	}
 });


 //Ajout de la differenciation pour la diapositive en cours//

 const dots = document.querySelectorAll('.dot');
// Suppression d'abord la classe dot_selected de tous les points
dots.forEach(dot => {
   dot.classList.remove('dot_selected');
});

// Ajout la classe dot_selected au point correspondant à la diapositive en cours de visionnage
const currentSlideIndex = 0; // Remplacez 0 par l'index de la diapositive en cours
dots[currentSlideIndex].classList.add('dot_selected');


//mécanisme d'écoute d'événement sur les flèches gauche et droite pour le currentSlideIndex.//
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let currentSlideIndex = 0; // Initialisez la valeur de currentSlideIndex à 0, pour commencer avec la première diapositive


// Ajout un écouteur d'événement pour la flèche gauche
arrowLeft.addEventListener('click', function() {
   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
   // Mettez à jour l'index de la diapositive en cours en soustrayant 1 et en utilisant le modulo pour obtenir l'index dans les limites du tableau slides
});


// Ajout d'un écouteur d'événement pour la flèche droite
arrowRight.addEventListener('click', function() {
   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
   // Mis à jour l'index de la diapositive en cours en ajoutant 1 et en utilisant le modulo pour obtenir l'index dans les limites du tableau slides
});

