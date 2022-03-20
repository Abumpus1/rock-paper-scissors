class Game {
  constructor() {
    this.gameType = null;
    this.outcome = "Placeholder";
    this.players = {
      human: new Player("human", "😀"),
      computer: new Player("computer", "🤖")
    };
    this.classicRules = [
      {name: "wood", strongAgainst: ["water"]},
      {name: "water", strongAgainst: ["fire"]},
      {name: "fire", strongAgainst: ["wood"]}
    ];
    this.hardRules = [
      {name: "wood", strongAgainst: ["water", "earth"]},
      {name: "water", strongAgainst: ["fire", "metal"]},
      {name: "fire", strongAgainst: ["metal", "wood"]},
      {name: "metal", strongAgainst: ["wood", "earth"]},
      {name: "earth", strongAgainst: ["water", "fire"]}
    ];
  }

  chooseGame(gameType) {
    this.gameType = gameType;
  }

  changeToken() {
    let tokenOptions = ["😃", "👩", "👨", "👽"];
    this.players.human.tokenNum++;
    if (this.players.human.tokenNum > 3) {
      this.players.human.tokenNum = 0;
    }
    this.players.human.token = tokenOptions[this.players.human.tokenNum];
  }

  retrieveLocalWins() {
    this.players.human.retrieveWinsFromStorage();
    this.players.computer.retrieveWinsFromStorage();
  }

  resetWins() {
    this.players.human.wins = 0;
    this.players.human.saveWinsToStorage();
    this.players.computer.wins = 0;
    this.players.computer.saveWinsToStorage();
  }

  takeTurns(weapon) {
    this.players.human.takeTurn(weapon);
    this.players.computer.takeRandomTurn(this.gameType);
    this.verifyGameType();
  }

  verifyGameType() {
    if (this.gameType === "classic") {
      let gameRules = this.classicRules;
      this.decideWinner(gameRules);
    } else {
      let gameRules = this.hardRules;
      this.decideWinner(gameRules);
    }
  }

  decideWinner(gameRules) {
    let playerTurn = this.players.human.turn;
    let computerTurn = this.players.computer.turn;
    if (playerTurn === computerTurn) {
      return this.outcome = "🙃 It's a draw! 🙃";
    }
    gameRules.forEach((gameRule) => {
      if (playerTurn === gameRule.name && gameRule.strongAgainst.includes(computerTurn)) {
        this.players.human.wins++;
        this.players.human.saveWinsToStorage();
        return this.outcome = `${this.players.human.token} Human won this round! ${this.players.human.token}`;
      } else if (playerTurn === gameRule.name) {
        this.players.computer.wins++;
        this.players.computer.saveWinsToStorage();
        return this.outcome = "🤖 Computer won this round! 🤖";
      }
    });
  }
}
