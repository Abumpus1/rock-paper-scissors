class Game {
  constructor() {
    this.players = {
      human: new Player("human", 😀),
      computer: new Player("computer", 💻)
    };
    this.turns = {
      humanTurn: this.players.human.takeTurn(optionClicked),
      computerTurn: this.players.computer.takeTurn(optionClicked)
    }; // not sold on this
  }
}

/*
A way to keep track of the data for the game board
  player1 turn = rock/paper/scissors ?
A way to keep track of the selected game type
  this.gameType ?
A way to check the Game’s board data for win conditions

A way to detect when a game is a draw (no one has won)
  if inputs same, draw
A way to reset the Game’s board to begin a new game
  timeout for new choice?
*/
