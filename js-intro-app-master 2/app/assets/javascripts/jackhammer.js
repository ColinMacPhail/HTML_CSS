function clickThisBox(box) {
  var color = getRandomColor();
  box.style["background"] = color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#'
  for ( var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)]
  }
  return color;
  }

  var timesCLicked =0;
  function jackhammer() {
    timesCLicked++;
    if timesClicked = 5
  }