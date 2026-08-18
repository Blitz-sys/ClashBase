document.body.addEventListener("click", (event) => {
  if (event.target.id === "basesButton") {
    window.location.assign("bases.html");
  } else if (event.target.id === "armiesButton") {
    window.location.assign("armies.html");
  } else if (event.target.id === "clansButton") {
    window.location.assign("clans.html");
  } else if (event.target.id === "darkModeButton") {
    document.body.classList.toggle("dark-mode");
  }
});
const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
