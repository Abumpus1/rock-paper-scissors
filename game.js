class Game {
  constructor() {
    this.gameType = null;
    this.classicRules = [
      {name: "rock", strongAgainst: ["scissors"], weakAgainst: ["paper"]},
      {name: "paper", strongAgainst: ["rock"], weakAgainst: ["scissors"]},
      {name: "scissors", strongAgainst: ["paper"], weakAgainst: ["rock"]}
    ];
    this.hardRules = [
      {name: "rock", strongAgainst: ["scissors", "lizard"], weakAgainst: ["paper", "alien"]},
      {name: "paper", strongAgainst: ["rock", "alien"], weakAgainst: ["scissors", "lizard"]},
      {name: "scissors", strongAgainst: ["paper", "lizard"], weakAgainst: ["rock", "alien"]},
      {name: "lizard", strongAgainst: ["paper", "alien"], weakAgainst: ["rock", "scissors"]},
      {name: "alien", strongAgainst: ["scissors", "rock"], weakAgainst: ["paper", "lizard"]}
    ];
    this.players = {
      human: new Player("human", "😀"),
      computer: new Player("computer", "💻")
    };
    // A way to keep track of the data for the game board
    this.turns = {
      humanTurn: this.players.human.takeTurn(),
      computerTurn: this.players.computer.takeTurn()
    }; // not sold on this
  }

  chooseGame(gameType) {
    // A way to keep track of the selected game type
    this.gameType = gameType;
  }

  decideWinner() {
    for (var i = 0; i < classicRules.length; i++) {
      if (this.players.human.turn === ) {

      }
    }
    if (this.players.human.turn === "paper") {

    }
    if (this.players.human.turn === "scissors") {

    }
    this.players.human.turn
    this.players.computer.turn
    console.log(`${player} is the winner!`);
    console.log("It's a draw!");
    // A way to check the Game’s board data for win conditions

    // A way to detect when a game is a draw (no one has won)
    // if inputs same, draw
  }

  resetBoard() {
    // A way to reset the Game’s board to begin a new game
    // timeout for new choice?

  }
}
