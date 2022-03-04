class Player {
  constructor(playerName, token) {
    this.name = playerName;
    this.token = token;
    this.wins = 0;
    this.turn = null;
  }

  takeTurn(weapon) {
    this.turn = weapon;
    // return turn = "nope"; // maybe
  }

  takeRandomTurn() {
    var weapons = ["rock", "paper", "scissors"];
    this.turn = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(this.turn);
  }
}
