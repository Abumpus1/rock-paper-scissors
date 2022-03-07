class Game {
  constructor() {
    this.gameType = null;
    this.outcome = "Placeholder";
    this.players = {
      human: new Player("human", "😀"),
      computer: new Player("computer", "💻")
    };
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
  }

  chooseGame(gameType) {
    this.gameType = gameType;
  }

  changeToken() {
    var tokenOptions = ["😃", "👩", "👨", "👽"];
    this.players.human.tokenNum++;
    if (this.players.human.tokenNum > 3) {
      this.players.human.tokenNum = 0;
    }
    this.players.human.token = tokenOptions[this.players.human.tokenNum];
    console.log(this.players.human.token);
  }

  takeTurns(weapon) {
    this.players.human.takeTurn(weapon);
    this.players.computer.takeRandomTurn(this.gameType);
    this.decideWinner();
  }

  retrieveLocalWins() {
    this.players.human.retrieveWinsFromStorage();
    this.players.computer.retrieveWinsFromStorage();
  }

  decideWinner() {
    if (this.gameType === "classic") {
      var gameRules = this.classicRules;
    } else {
      var gameRules = this.hardRules;
    }
    var playerTurn = this.players.human.turn;
    var computerTurn = this.players.computer.turn;
    for (var i = 0; i < gameRules.length; i++) {
      if (playerTurn === computerTurn) {
        return this.outcome = "😭 It's a draw! 😭";
      } else if (playerTurn === gameRules[i].name && gameRules[i].strongAgainst.includes(computerTurn)) {
        this.players.human.wins++;
        this.players.human.saveWinsToStorage();
        return this.outcome = "😃 Human won this round! 😃";
      } else if (playerTurn === gameRules[i].name) {
        this.players.computer.wins++;
        this.players.computer.saveWinsToStorage();
        return this.outcome = "💻 Computer won this round! 💻";
      }
    }
  }
}
