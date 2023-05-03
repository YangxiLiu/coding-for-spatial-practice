const buttonPink = document.getElementById("button-pink");
const buttonBlue = document.getElementById("button-blue");
const buttonGreen = document.getElementById("button-green");
const buttonYellow = document.getElementById("button-yellow");

buttonPink.addEventListener("click", function() {
  document.body.style.backgroundColor = "#F8C3CD";
  notice.style.color = "#81C7D4";
});

buttonBlue.addEventListener("click", function() {
  document.body.style.backgroundColor = "#81C7D4";
  notice.style.color = "#F8C3CD";
});

buttonGreen.addEventListener("click", function() {
  document.body.style.backgroundColor = "#86C166";
  notice.style.color = "#FBE251";
});

buttonYellow.addEventListener("click", function() {
  document.body.style.backgroundColor = "#FBE251";
  notice.style.color = "#86C166";
});