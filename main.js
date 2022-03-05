// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var pickOptions = document.querySelectorAll(".pick-option");
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
  var playerTurn = game.players.human.turn;
  var computerTurn = game.players.computer.turn;
  outcomeDisplay.innerHTML = `
  <img class="pick-option" id="${playerTurn}" src="./src/${playerTurn}.png" alt="image of ${playerTurn}">
  <img class="pick-option" id="${computerTurn}" src="./src/${computerTurn}.png" alt="image of ${computerTurn}">
  `
}

function reset() {
  titleMessage.innerText = "Choose your fighter!";
  hide(outcomeDisplay);
  show(selectionDisplaysContainer);
}
