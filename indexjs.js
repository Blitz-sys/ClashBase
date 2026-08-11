const basesButton = document.getElementById("basesButton");
const armiesButton = document.getElementById("armiesButton");
const clansButton = document.getElementById("clansButton");
basesButton.addEventListener("click", () => {
  window.location.href("bases.html", "_self");
});
armiesButton.addEventListener("click", () => {
  window.location.href("armies.html", "_self");
});
clansButton.addEventListener("click", () => {
  window.location.href("clans.html", "_self");
});
