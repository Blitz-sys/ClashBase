const darkModeButton = document.getElementById("darkModeButton");
const outerBody = document.querySelector(".outer-body");
const startupButtons = document.querySelectorAll(".button-container-start button");
let darkModeState = localStorage.getItem("darkMode") === "true";
function toggleDarkMode() {
  darkModeState = !darkModeState
  localStorage.setItem("darkMode", darkModeState);
  applyDarkMode();
}
function applyDarkMode() {
  if (darkModeState) {
    outerBody.style.backgroundColor = "#0c0105";
    outerBody.style.color = "ghostwhite";
    startupButtons.forEach(button => {
      button.style.backgroundColor = "#0c0105";
      button.style.color = "ghostwhite";
    });
  } else {
    outerBody.style.backgroundColor = "ghostwhite";
    outerBody.style.color = "#0c0105";
    startupButtons.forEach(button => {
      button.style.backgroundColor = "ghostwhite";
      button.style.color = "#0c0105";
    });
  }
}
applyDarkMode();
darkModeButton.addEventListener("click", toggleDarkMode);
