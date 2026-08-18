const basesButton = document.getElementById("basesButton");
const armiesButton = document.getElementById("armiesButton");
const clansButton = document.getElementById("clansButton");
const darkModeButton = document.getElementById("darkModeButton");
basesButton.addEventListener("click", () => {
  window.location.assign("bases.html", "_self");
});
armiesButton.addEventListener("click", () => {
  window.location.assign("armies.html", "_self");
});
clansButton.addEventListener("click", () => {
  window.location.assign("clans.html", "_self");
});
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
