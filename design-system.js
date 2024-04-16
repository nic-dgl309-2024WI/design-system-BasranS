//Toggle for design sytem
function toggleNav() {
    var sideNav = document.querySelector('.side-navbar');
    sideNav.classList.toggle('side-navbar-hidden');
  }


  function copyToClipboard() {
    // Select the text or content you want to copy
    var contentToCopy = "Text or content you want to copy";

    // Create a temporary textarea element
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = contentToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text within the textarea
    tempTextArea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Optionally, you can provide feedback to the user that the text has been copied
    alert("Text copied to clipboard!");
}