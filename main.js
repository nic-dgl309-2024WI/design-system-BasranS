// Toggle 
function toggleNav() {
var dropdownMenu = document.querySelector('.dropdown-menu');
dropdownMenu.classList.toggle('show-dropdown');
}

// Slider
document.addEventListener('DOMContentLoaded', function () {
// Initialize slide index to 0
var slideIndex = 0;
// Display the initial slide
showSlides(slideIndex);

// Function to display slides
function showSlides(index) {
    // Select all slides and pagination elements
    var slides = document.querySelectorAll('.main-slider__image');
    var pagination = document.querySelectorAll('.pagination');

    // Loop through each slide
    for (var i = 0; i < slides.length; i++) {
        // Hide all slides and remove 'active' class from pagination elements
        slides[i].style.display = "none";
        pagination[i].classList.remove('active');
    }

    // Display the slide at the given index and mark its pagination as 'active'
    slides[index].style.display = "block";
    pagination[index].classList.add('active');
}

// Initialize current slide index
var currentIndex = 0;
// Select all slides
var slides = document.querySelectorAll('.main-slider__image');
// Get total number of slides
var totalSlides = slides.length;

// Function to show a specific slide
function showSlide(n) {
    currentIndex = n;
    showSlides(currentIndex);
}

// Function to show the next slide
function nextSlide() {
    currentIndex++;
    // If reached the end, go back to the first slide
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
}

// Function to show the previous slide
function prevSlide() {
    currentIndex--;
    // If at the beginning, go to the last slide
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlides(currentIndex);
}

// Set interval to automatically change slide every 2 seconds
var timer = setInterval(nextSlide, 2000);
});