  // Toggle for outback nursery
  function toggle() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show-dropdown');
    }

// Slider
    document.addEventListener('DOMContentLoaded', function() {
      // For mobile slider
      var mobileSlides = document.querySelectorAll('.main-slider__image');
      var mobilePaginationLinks = document.querySelectorAll('.pagination'); 
      var mobileCurrentIndex = 0;
      var mobileTotalSlides = mobileSlides.length;
  
      // For desktop slider
      var desktopSlides = document.querySelectorAll('.maindesk-slider__image');
      var desktopPaginationLinks = document.querySelectorAll('.pagination-desk'); 
      var desktopCurrentIndex = 0;
      var desktopTotalSlides = desktopSlides.length;
  
      function showSlide(slides, paginationLinks, currentIndex) {
          slides.forEach(function(slide) {
              slide.style.display = "none";
          });
          slides[currentIndex].style.display = "block";
  
          paginationLinks.forEach(function(link) {
              link.classList.remove('active-link');
          });
          paginationLinks[currentIndex].classList.add('active-link');
      }
  
      function nextSlide(slides, currentIndex, totalSlides) {
          currentIndex++;
          if (currentIndex >= totalSlides) {
              currentIndex = 0;
          }
          return currentIndex;
      }
  
      function prevSlide(slides, currentIndex, totalSlides) {
          currentIndex--;
          if (currentIndex < 0) {
              currentIndex = totalSlides - 1;
          }
          return currentIndex;
      }
  
      function startTimer(slides, paginationLinks, currentIndex, totalSlides) {
          setInterval(function() {
              currentIndex = nextSlide(slides, currentIndex, totalSlides);
              showSlide(slides, paginationLinks, currentIndex);
          }, 2000);
      }
  
      // Start timers for both desktop and mobile sliders
      startTimer(mobileSlides, mobilePaginationLinks, mobileCurrentIndex, mobileTotalSlides);
      startTimer(desktopSlides, desktopPaginationLinks, desktopCurrentIndex, desktopTotalSlides);
  });
  



  

  // Accordion (Guide section)
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

  // Event listeners for each section of mobile
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

    // Event listeners for each section of desktop
    document.getElementById("myBtn-desk").addEventListener("click", function() {
      myFunction("myBtn-desk", "dots-desk", "more-desk");
    });
  
    document.getElementById("myBtn1-desk").addEventListener("click", function() {
      myFunction("myBtn1-desk", "dots1-desk", "more1-desk");
    });
  
    document.getElementById("myBtn2-desk").addEventListener("click", function() {
      myFunction("myBtn2-desk", "dots2-desk", "more2-desk");
    });
  
    document.getElementById("myBtn3-desk").addEventListener("click", function() {
      myFunction("myBtn3-desk", "dots3-desk", "more3-desk");
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



document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card-products");
  const paginationLinks = document.querySelectorAll(".cards-pagination");
  let currentPage = 0;

  const updatePage = () => {
    cards.forEach((card, index) => {
      card.style.display = index === currentPage ? "block" : "none";
    });
    paginationLinks.forEach((link, index) => {
      link.classList.toggle("active-link", index === currentPage);
    });
  };

  paginationLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = index;
      updatePage();
    });
  });

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = currentPage > 0 ? currentPage - 1 : cards.length - 1;
    updatePage();
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = currentPage < cards.length - 1 ? currentPage + 1 : 0;
    updatePage();
  });

  updatePage();
});



