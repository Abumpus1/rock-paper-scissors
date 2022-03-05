// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var pickOptions = document.querySelectorAll(".pick-option");

var selectionDisplaysContainer = document.querySelector(".selection-displays-container");
var gameSelectContainer = document.querySelector(".game-select-container");
var rockPaperScissorsContainer = document.querySelector(".rock-paper-scissors-container");
var lizardAlienContainer = document.querySelector(".lizard-alien-container");
var outcomeDisplay = document.querySelector(".outcome-display");

var game = new Game();
console.log(game);

// event listeners
gameSelectContainer.addEventListener("click", function(event) {
  if (event.target.closest(".game-option")) {
    chooseGame(event.target.closest(".game-option").id);
  }
});
selectionDisplaysContainer.addEventListener("click", function(event) {
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
  show(rockPaperScissorsContainer);
  if (game.gameType === "hard") {
    show(lizardAlienContainer);
  }
}

function chooseWeapons(weapon) {
  game.takeTurns(weapon);
  humanWins.innerText = `Wins: ${game.players.human.wins}`;
  computerWins.innerText = `Wins: ${game.players.computer.wins}`;
  showOutcome()
}

function showOutcome() {
  hide(selectionDisplaysContainer);
  show(outcomeDisplay);
  setTimeout(reset, 3000);
}

function reset() {
  hide(outcomeDisplay);
  show(selectionDisplaysContainer);
}
