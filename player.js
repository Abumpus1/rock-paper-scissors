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

  }
}
