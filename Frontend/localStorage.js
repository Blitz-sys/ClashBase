const body = document.body;
const darkModeButton = document.getElementById("darkModeButton");
const loginButton = document.getElementById("loginButton");
let darkModeState = localStorage.getItem("darkMode") === "true";
function applyDarkMode() {
  if (darkModeState) {
    body.classList.add("dark-mode");
    darkModeButton.classList.add("dark-mode");
    loginButton.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    darkModeButton.classList.remove("dark-mode");
    loginButton.classList.remove("dark-mode");;
  }
}
function toggleDarkMode() {
  darkModeState = !darkModeState;
  localStorage.setItem("darkMode", darkModeState);
  applyDarkMode();
}
applyDarkMode();
darkModeButton.addEventListener("click", toggleDarkMode);
