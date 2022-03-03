class Player {
  constructor(playerName, token) {
    this.name = playerName;
    this.token = token;
    this.wins = 0;
    this.turn = null;
  }

  takeTurn(turn) {
    this.turn = turn;
    // return turn = "nope"; // maybe
  }

  takeRandomTurn() {

  }
}
