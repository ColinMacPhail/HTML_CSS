var winningBox = Math.floor((Math.random() * 3) + 1); // Picks a random number between 1 and 3:

function guessBox(boxNumber) {

  if (boxNumber === winningBox) {
    alert("You win!");
  } else {
    console.log("wrong");
  }

}


