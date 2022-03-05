// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var pickOptions = document.querySelectorAll(".pick-option");
var playerWeapon = document.querySelector(".player-weapon");
var computerWeapon = document.querySelector(".computer-weapon");
var titleMessage = document.querySelector(".title-message");

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
  titleMessage.innerText = "Choose your fighter!";
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
  titleMessage.innerText = "THIS PERSON won this round!";
  setTimeout(reset, 2000);
}

function reset() {
  // playerWeapon.innerHTML =
  // computerWeapon.innerHTML =
  titleMessage.innerText = "Choose your fighter!";
  hide(outcomeDisplay);
  show(selectionDisplaysContainer);
}
