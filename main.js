// Toggle 
function toggleNav() {
var dropdownMenu = document.querySelector('.dropdown-menu');
dropdownMenu.classList.toggle('show-dropdown');
}

// Slider
document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.main-slider__image');
    var paginationLinks = document.querySelectorAll('.pagination');
    var currentIndex = 0;
    var totalSlides = slides.length;
  
    function showSlide(index) {
      // Hide all slides
      slides.forEach(function(slide) {
        slide.style.display = "none";
      });
      // Display the slide at the given index
      slides[index].style.display = "block";
  
      // Remove active class from all pagination links
      paginationLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      // Add active class to the corresponding pagination link
      paginationLinks[index].classList.add('active');
    }
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      }
      showSlide(currentIndex);
    }
  
   
    var timer = setInterval(nextSlide, 2000);
  });
  

  // Card Carousel
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("customer-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  
  