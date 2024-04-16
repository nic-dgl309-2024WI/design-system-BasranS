//Toggle for design sytem
function toggleNav() {
    var sideNav = document.querySelector('.side-navbar');
    sideNav.classList.toggle('side-navbar-hidden');
  }


  function copyToClipboard() {
    const textToCopy = "Text to be copied";
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Text copied to clipboard");
    }).catch((error) => {
      console.error("Unable to copy text: ", error);
    });
  }