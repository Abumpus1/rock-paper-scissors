// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var optionsContainer = document.querySelector(".rock-paper-scissors-container");
var pickOptions = document.querySelectorAll(".pick-option");

var game = new Game;
console.log(game);

// event listeners
optionsContainer.addEventListener('click', function(event) {
  clickWeapon(event);
});

// functions
function clickWeapon(event) {
  if (event.target.className === "pick-option") {
    chooseWeapon(event.target)
  }
}

function chooseWeapon(clickedImage) {
  game.takeTurns(clickedImage.id);
  humanWins.innerText = `Wins: ${game.players.human.wins}`;
  computerWins.innerText = `Wins: ${game.players.computer.wins}`;
  // for (var i = 0; i < pickOptions.length; i++) {
  //   if (clickedImage.id === ) {
  //
  //   }
  // }
}
