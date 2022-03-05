// variables
var humanWins = document.querySelector("#humanWins");
var computerWins = document.querySelector("#computerWins");
var pickOptions = document.querySelectorAll(".pick-option");
var titleMessage = document.querySelector(".title-message");
var changeGameButton = document.querySelector(".change-game");
var selectionDisplaysContainer = document.querySelector(".selection-displays-container");
var gameSelectContainer = document.querySelector(".game-select-container");
var rockPaperScissorsContainer = document.querySelector(".rock-paper-scissors-container");
var lizardAlienContainer = document.querySelector(".lizard-alien-container");
var outcomeDisplay = document.querySelector(".outcome-display");
var game = new Game();

// event listeners
gameSelectContainer.addEventListener("click", function(event) {
  if (event.target.closest(".game-option")) {
    chooseGame(event.target.closest(".game-option").id);
  }});
selectionDisplaysContainer.addEventListener("click", function(event) {
  if (event.target.className === "pick-option") {
    chooseWeapons(event.target);
  }});
changeGameButton.addEventListener("click", goToMain);

// functions
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function goToMain() {
  hide(rockPaperScissorsContainer);
  hide(lizardAlienContainer);
  hide(changeGameButton);
  show(gameSelectContainer);
  titleMessage.innerText = "Choose your game!";
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
 weapon.classList.add("clicked");
  setTimeout(function() {
    weapon.classList.remove("clicked");
    game.takeTurns(weapon.id);
    humanWins.innerText = `Wins: ${game.players.human.wins}`;
    computerWins.innerText = `Wins: ${game.players.computer.wins}`;
    showOutcome()
  }, 300)
}

function showOutcome() {
  hide(selectionDisplaysContainer);
  show(outcomeDisplay);
  titleMessage.innerText = game.outcome;
  var playerTurn = game.players.human.turn;
  var computerTurn = game.players.computer.turn;
  outcomeDisplay.innerHTML = `
  <img class="display-option" id="${playerTurn}" src="./src/${playerTurn}.png" alt="image of ${playerTurn}">
  <img class="display-option" id="${computerTurn}" src="./src/${computerTurn}.png" alt="image of ${computerTurn}">
  `;
  setTimeout(reset, 2000);
}

function reset() {
  titleMessage.innerText = "Choose your fighter!";
  show(changeGameButton);
  hide(outcomeDisplay);
  show(selectionDisplaysContainer);
}
