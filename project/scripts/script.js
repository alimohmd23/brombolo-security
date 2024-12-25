function samaka() {
    const navMenu = document.querySelector('.navbar ul');
    navMenu.classList.toggle('active');
}
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth + 10;

function updateSliderPosition() {
    slider.style.transition = 'transform 1s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function goToNextSlide() {
    if (currentIndex < slides.length - 3) {
        currentIndex++;
        updateSliderPosition();
    }
}

function goToPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}

prevButton.addEventListener('click', goToPreviousSlide);
nextButton.addEventListener('click', goToNextSlide);


window.onload = function () {
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
};