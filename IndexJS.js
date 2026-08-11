const basesButton = document.getElementById("basesButton");
const armiesButton = document.getElementById("armiesButton");
const clansButton = document.getElementById("clansButton");
basesButton.addEventListener("click", () => {
  window.open("bases.html", "_self");
});
armiesButton.addEventListener("click", () => {
  window.open("armies.html", "_self");
});
clansButton.addEventListener("click", () => {
  window.open("clans.html", "_self");
});
