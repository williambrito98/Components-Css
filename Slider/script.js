//SLIDER FADE
// let time = 2000;
// let currentImageIndex = 0;

// let images = document.querySelectorAll("#slider img");
// let maxImages = images.length;

// function nextImage() {
//     images[currentImageIndex].classList.remove("selected")
//     currentImageIndex++
//     if (currentImageIndex >= maxImages) {
//         currentImageIndex = 0
//     }

//     images[currentImageIndex].classList.add("selected")

// }


// function start() {
//     setInterval(() => {
//         nextImage()
//     }, time)
// }

// window.addEventListener('load', start)
import SlideNav from './SlideNav.js';
const slide = new SlideNav('.slide','.slide-wrapper');
slide.init();
slide.addArrow('.prev','.next');
slide.addControl();