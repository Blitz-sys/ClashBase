const body = document.body
let darkModeState = JSON.parse(localStorage.getItem("darkMode"))
function applyDarkMode() {
  if (darkModeState) {
    body.id = ("dark-mode")
  }
  else {
    body.removeAttribute("id")
  }
}
applyDarkMode()
document.getElementById("darkModeButton").addEventListener("click", () => {
  darkModeState = !darkModeState;
  localStorage.setItem("darkMode", JSON.stringify(darkModeState))
  applyDarkMode()
})
