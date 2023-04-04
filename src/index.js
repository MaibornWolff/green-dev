const earth = document.getElementById("rocket");
const rocket = document.getElementById("rocket");
const comet = document.getElementById("comet");
const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
  document.getElementById("warning").style.display = "none";
  rocket.classList.add("earth-is-saved");
  comet.classList.add("earth-is-saved");
  startButton.style.display = "none";
});
