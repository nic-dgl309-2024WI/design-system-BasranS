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
        link.classList.remove('active-link');
      });
      // Add active class to the corresponding pagination link
      paginationLinks[index].classList.add('active-link');
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
  

  
// Slider
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.maindesk-slider__image');
  var paginationLinks = document.querySelectorAll('.pagination-desk');
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
      link.classList.remove('active-link');
    });
    // Add active class to the corresponding pagination link
    paginationLinks[index].classList.add('active-link');
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



// product

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
  

  // Accordion
  function myFunction(btnId, dotsId, moreId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(btnId);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read On";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent = "Read Less";
      moreText.style.display = "inline";
    }
  }

  // Event listeners for each section
  document.getElementById("myBtn").addEventListener("click", function() {
    myFunction("myBtn", "dots", "more");
  });

  document.getElementById("myBtn1").addEventListener("click", function() {
    myFunction("myBtn1", "dots1", "more1");
  });

  document.getElementById("myBtn2").addEventListener("click", function() {
    myFunction("myBtn2", "dots2", "more2");
  });

  document.getElementById("myBtn3").addEventListener("click", function() {
    myFunction("myBtn3", "dots3", "more3");
  });


    // Function to navigate to a specific accordion section
    function currentSlide(index) {
      var accordions = document.querySelectorAll('.guide-accordion');
      for (var i = 0; i < accordions.length; i++) {
        accordions[i].style.display = "none";
      }
      accordions[index].style.display = "block";
    }

    document.querySelectorAll('.guide-accordion').forEach((section, index) => {
      if (index === 0) {
        section.style.display = 'block'; // or any other style you want
      } else {
        section.style.display = 'none';
      }
    });
    
    var acc = document.getElementsByClassName("gift-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-link");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}