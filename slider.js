'use strict';
window.onload = () => {slide.style.background = "url('./src/img/1.jpg') center"}
    

let slide = document.getElementById('slide');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');

function slideChange(urlSlide, n){
    if(urlSlide == null){
        urlSlide = "url('./src/img/1.jpg') center";
    }else{
        urlSlide = "url('./src/img/2.jpg') center";
    }
    slide.style.background = urlSlide;
}

arrowLeft.addEventListener('click', slideChange());
arrowLeft.addEventListener('click', slideChange());