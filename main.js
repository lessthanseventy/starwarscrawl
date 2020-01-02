var textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});

let play = function() {

  let outputDiv = document.getElementById("innerContainer");
  let crawlText = document.getElementById("crawlText").value

  outputDiv.classList.add('notransition'); // Disable transitions
  outputDiv.style.top = '70%'; // Reset output position offscreen
  outputDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes
  outputDiv.classList.remove('notransition'); // Re-enable transitions

  if (!crawlText) {
    crawlText = document.getElementById("crawlText").placeholder;
  }
  outputDiv.innerHTML = crawlText;

  let topAmount = outputDiv.offsetHeight;
  console.log(topAmount);
  let animationTime = (topAmount / 800) * 150;
  outputDiv.style.transition = 'top ' + animationTime + 's linear 0s';
  console.log(outputDiv.style.transition);
  outputDiv.style.top = '-' + topAmount + 'px';
}