class Game {
  constructor() {
    this.gameType = null;
    this.classicRules = [
      {name: "rock", strongAgainst: ["scissors"]},
      {name: "paper", strongAgainst: ["rock"]},
      {name: "scissors", strongAgainst: ["paper"]}
    ];
    this.hardRules = [
      {name: "rock", strongAgainst: ["scissors", "lizard"]},
      {name: "paper", strongAgainst: ["rock", "alien"]},
      {name: "scissors", strongAgainst: ["paper", "lizard"]},
      {name: "lizard", strongAgainst: ["paper", "alien"]},
      {name: "alien", strongAgainst: ["scissors", "rock"]}
    ];
    this.players = {
      human: new Player("human", "😀"),
      computer: new Player("computer", "💻")
    };
  }

  chooseGame(gameType) {
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
  }

  resetBoard() {
    // A way to reset the Game’s board to begin a new game
    // timeout for new choice?

  }
}
