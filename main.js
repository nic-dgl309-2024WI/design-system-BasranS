
//slider mobile
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.main-slider__image');
  var paginationLinks = document.querySelectorAll('.pagination'); 
  var currentIndex = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach(function(slide) {
          slide.style.display = "none";
      });
      slides[index].style.display = "block";

      paginationLinks.forEach(function(link) {
          link.classList.remove('active-link');
      });
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

  
//slider desktop
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.maindesk-slider__image');
  var paginationLinks = document.querySelectorAll('.pagination-desk'); 
  var currentIndex = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach(function(slide) {
          slide.style.display = "none";
      });
      slides[index].style.display = "block";

      paginationLinks.forEach(function(link) {
          link.classList.remove('active-link');
      });
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


  //  Customer Card Carousel
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

  // Card carousel desktop
  // Function to initialize desktop carousel
function initDesktopCarousel() {
  var desktopSlides = document.querySelectorAll('.customer-slide__desk');
  var slideIndex = 0;
  showSlides(slideIndex, desktopSlides);

  // Function to show the appropriate slide
  function showSlides(index, slides) {
    // Hide all slides except the one at the given index
    for (var i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].style.display = 'block';
      } else {
        slides[i].style.display = 'none';
      }
    }
  }

  // Function to handle next/previous buttons
  function plusSlides(n) {
    slideIndex += n;
    // Reset to the first slide if index exceeds the number of slides
    if (slideIndex >= desktopSlides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = desktopSlides.length - 1;
    }
    showSlides(slideIndex, desktopSlides);
  }

  // Event listeners for next/previous buttons
  document.querySelector('.prev-desk').addEventListener('click', function () {
    plusSlides(-1);
  });
  document.querySelector('.next-desk').addEventListener('click', function () {
    plusSlides(1);
  });
}

// Call the function to initialize the desktop carousel
initDesktopCarousel();

  

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