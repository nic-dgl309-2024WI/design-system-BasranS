//Toggle for design sytem
function toggleNav() {
    var sideNav = document.querySelector('.side-navbar');
    sideNav.classList.toggle('side-navbar-hidden');
  }

  function copyToClipboard() {
    const codeBlock = document.querySelector('.code-container code');
    const textToCopy = codeBlock.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => alert("Code copied to clipboard"))
        .catch(error => console.error("Unable to copy code: ", error));
}

