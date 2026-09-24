const html = document.documentElement
let darkModeState = JSON.parse(localStorage.getItem("darkMode"))
function applyDarkMode() {
  if (darkModeState) {
    html.id = ("dark-mode")
  }
  else {
    html.removeAttribute("id")
  }
}
applyDarkMode()
document.getElementById("darkModeButton").addEventListener("click", () => {
  darkModeState = !darkModeState;
  localStorage.setItem("darkMode", JSON.stringify(darkModeState))
  applyDarkMode()
})
