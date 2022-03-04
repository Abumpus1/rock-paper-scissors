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
  takeTurns(weapon) {
    this.players.human.takeTurn(weapon)
    this.players.computer.takeRandomTurn()
    this.decideWinner()
  }

  decideWinner() {
    var playerTurn = this.players.human.turn;
    var computerTurn = this.players.computer.turn;
    for (var i = 0; i < this.classicRules.length; i++) {
      if (playerTurn === this.classicRules[i].name && playerTurn !== computerTurn) {
        if (this.classicRules[i].strongAgainst.includes(computerTurn)) {
          console.log("Human won this round!");
          this.players.human.wins++;
          return;
        } else {
          console.log("Computer won this round!");
          this.players.computer.wins++;
          return;
        }
      } else if (playerTurn === computerTurn) {
        console.log("It's a draw!");
        return;
      }
    }
    // if (this.players.human.turn === "paper") {
    //
    // }
    // if (this.players.human.turn === "scissors") {
    //
    // }
    // this.players.human.turn
    // this.players.computer.turn
    // A way to check the Game’s board data for win conditions

    // A way to detect when a game is a draw (no one has won)
    // if inputs same, draw
  }

  resetBoard() {
    // A way to reset the Game’s board to begin a new game
    // timeout for new choice?

  }
}
