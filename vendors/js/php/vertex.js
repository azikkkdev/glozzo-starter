/* YOU DONT NEED THESE, these are just for the popup you see */
function closeTreactPopup() {
  document.querySelector(".treact-popup").classList.add("hidden");
}

function openTreactPopup() {
  document.querySelector(".treact-popup").classList.remove("hidden");
}
document.querySelector(".close-treact-popup").addEventListener("click", closeTreactPopup);
setTimeout(openTreactPopup, 3000)