//Toggle for design sytem
function toggleNav() {
    var sideNav = document.querySelector('.side-navbar');
    sideNav.classList.toggle('side-navbar-hidden');
  }


  function copyToClipboard() {
    var htmlCode = document.querySelector('.code-container code').innerText;
    navigator.clipboard.writeText(htmlCode).then(function() {
      alert('HTML code copied to clipboard!');
    }, function(err) {
      console.error('Unable to copy HTML code: ', err);
    });
  }