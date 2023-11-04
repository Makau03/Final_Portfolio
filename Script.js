// JavaScript for responsive navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// JavaScript for the image slider in the projects section
const projectImages = document.querySelectorAll('.project img');
let currentIndex = 0;

function showImage(index) {
    projectImages.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % projectImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Add event listeners for next and previous buttons
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);
