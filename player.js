class Player {
  constructor(playerName, token) {
    this.name = playerName;
    this.token = token;
    this.wins = 0;
    this.turn = null;
  }

  takeTurn(weapon) {
    this.turn = weapon;
  }

  takeRandomTurn(gameType) {
    if (gameType === "classic") {
      var weapons = ["rock", "paper", "scissors"];
    } else {
      var weapons = ["rock", "paper", "scissors", "lizard", "alien"];
    }
    this.turn = weapons[Math.floor(Math.random() * weapons.length)];
  }

  saveWinsToStorage() {
    window.localStorage.setItem(`${this.name} wins`, `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    this.wins = window.localStorage.getItem(`${this.name} wins`);
  }
}
