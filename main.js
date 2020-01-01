let elem = document.getElementById("innerContainer");

let play = function() {
  let topAmount = elem.scrollHeight;
  elem.style.top = '-' + topAmount + 'px';
}