alert("This page contains Savitäti's personal information. Use at your own risk!");
window.onload = start;

function start() {
  chooseColor();
  vibrate(60000); // Vibrate mobile device for one minute
}

function vibrate(ms) {
  navigator.vibrate(ms)
}

function red() {
  document.body.style.backgroundColor = "red";
}

function green() {
  document.body.style.backgroundColor = "green";
  setTimeout(blue, 50);
}

function blue() {
  document.body.style.backgroundColor = "blue";
  setTimeout(pink, 50);
}

function pink() {
  document.body.style.backgroundColor = "pink";
  setTimeout(yellow, 50);
}

function yellow() {
  document.body.style.backgroundColor = "yellow";
  setTimeout(chooseColor, 50);
}

function chooseColor() {
  red();

  setTimeout(green, 50);
}
