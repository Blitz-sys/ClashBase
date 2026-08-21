document.body.addEventListener("click", (event) => {
  if (event.target.id === "basesButton") {
    window.location.assign("bases.html");
  } else if (event.target.id === "armiesButton") {
    window.location.assign("armies.html");
  } else if (event.target.id === "clansButton") {
    window.location.assign("clans.html");
  }
});
