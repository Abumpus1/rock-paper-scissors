// query selectors
const humanWins = document.querySelector("#humanWins");
const computerWins = document.querySelector("#computerWins");
const pickOptions = document.querySelectorAll(".pick-option");
const titleMessage = document.querySelector(".title-message");
const humanToken = document.querySelector("#humanToken");
const changeIconButton = document.querySelector(".change-icon");
const resetScoreButton = document.querySelector(".reset-score");
const changeGameButton = document.querySelector(".change-game");
const selectionDisplaysContainer = document.querySelector(".selection-displays-container");
const gameSelectContainer = document.querySelector(".game-select-container");
const woodWaterFireContainer = document.querySelector(".wood-water-fire-container");
const metalEarthContainer = document.querySelector(".metal-earth-container");
const outcomeDisplay = document.querySelector(".outcome-display");

// on load
const game = new Game();
checkForWins();

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
changeIconButton.addEventListener("click", chooseToken);
resetScoreButton.addEventListener("click", resetScore);

// functions
function checkForWins() {
  game.retrieveLocalWins();
  updateWins();
}

function resetScore() {
  game.resetWins();
  updateWins();
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function chooseToken() {
  game.changeToken();
  updateToken();
}

function updateToken() {
  humanToken.innerText = `${game.players.human.token}`;
}

function goToMain() {
  hide(woodWaterFireContainer);
  hide(metalEarthContainer);
  hide(changeGameButton);
  show(gameSelectContainer);
  titleMessage.innerText = "Choose your game!";
}

function chooseGame(gameSelected) {
  game.gameType = gameSelected;
  hide(gameSelectContainer);
  show(woodWaterFireContainer);
  if (game.gameType === "hard") {
    show(metalEarthContainer);
  }
  titleMessage.innerText = "Choose your fighter!";
}

function chooseWeapons(weapon) {
 weapon.classList.add("clicked");
  setTimeout(function() {
    weapon.classList.remove("clicked");
    game.takeTurns(weapon.id);
    hide(changeGameButton);
    updateWins();
    showOutcome();
  }, 300);
}

function updateWins() {
  humanWins.innerText = `Wins: ${game.players.human.wins}`;
  computerWins.innerText = `Wins: ${game.players.computer.wins}`;
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
