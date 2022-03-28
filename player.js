class Player {
  constructor(playerName, token) {
    this.name = playerName;
    this.token = token;
    this.tokenNum = 0;
    this.wins = 0;
    this.turn = null;
  }

  takeTurn(weapon) {
    this.turn = weapon;
  }

  takeRandomTurn(gameType) {
    if (gameType === "classic") {
      var weapons = ["wood", "water", "fire"];
    } else {
      var weapons = ["wood", "water", "fire", "metal", "earth"];
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
