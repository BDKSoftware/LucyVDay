function navigateToNo() {
  window.location.href = "no.html";
}

function navigateToNoAgain() {
  window.location.href = "noAgain.html";
}

function navigateToMaybe() {
  window.location.href = "maybe.html";
}

function navigateToYes() {
  window.location.href = "yes.html";
}

function navigateToGift() {
  window.location.href =
    "https://shop.subtronics.net/products/subtronics-tesseract-x-aaron-brooks-baseball-jersey";
}

let clicked = 0;

function noPress() {
  let button = document.getElementById("noButton2");
  let yesButton = document.getElementById("yesButton");
  //Move button Randomly so it cannot be clicked
  button.style.position = "absolute";
  button.style.left = Math.random() * 65 + "%";
  button.style.top = Math.random() * 65 + "%";

  clicked++;

  if (clicked > 5) {
    yesButton.style.display = "inline-block";
    button.style.display = "none";
  }
}
