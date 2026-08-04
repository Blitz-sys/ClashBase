const basesButton = document.getElementById("basesButton");
const armiesButton = document.getElementById("armiesButton");
const clansButton = document.getElementById("clansButton");
basesButton.addEventListener("click", () => {
  window.open("Bases.html", "_self");
});
armiesButton.addEventListener("click", () => {
  window.open("Armies.html", "_self");
});
clansButton.addEventListener("click", () => {
  window.open("Clans.html", "_self");
});
