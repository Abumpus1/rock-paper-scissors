// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var pickOptions = document.querySelectorAll(".pick-option");

var gameSelectContainer = document.querySelector(".game-select-container");
var optionsContainer = document.querySelector(".rock-paper-scissors-container");

var game = new Game;
console.log(game);

// event listeners
gameSelectContainer.addEventListener("click", function(event) {
  if (event.target.className === "game-option") {
    chooseGame(event.target.id)
  }
});
optionsContainer.addEventListener("click", function(event) {
  if (event.target.className === "pick-option") {
    chooseWeapons(event.target.id);
  }
});

// functions
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function chooseGame(gameSelected) {
  game.gameType = gameSelected;
  hide(gameSelectContainer);
  show(optionsContainer);
}

function chooseWeapons(weapon) {
  game.takeTurns(weapon);
  humanWins.innerText = `Wins: ${game.players.human.wins}`;
  computerWins.innerText = `Wins: ${game.players.computer.wins}`;
}
