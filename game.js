var Game = function() {
  this.deck = new Array();
  this.activeDeck = new Array();
  this.trash = new Array();
  this.players = new Array();
  this.activePlayer = 0;
  this.startHooks = new Array();
  this.kartaKurwaWioski = {};

};

Game.prototype.gameLoop = function(action) {
  if (this.deck.length+this.activeDeck.length) {
    if (action.type === "finish") {
      this.activePlayerFinishGame(action);
    } else if (action.type === "buy") {

    }


    this.activePlayer++;
    //cbk updateDecks
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
      //round end (make some actions from kartaKurwaWioski)
    }
  } else {
    //Game FINISH
  }
}

Game.prototype.init = function () {
}

Game.prototype.activePlayerFinishGame = function (action) {
  if (this.activeDeck.length) {
    this.trash.push(this.activeDeck[0]);
  }
  this.players[this.activePlayer].setCoins(action.coinStatus);
  this.players[this.activePlayer].setHealth(action.healthStaus);
  this.activeDeck = shift(this.activeDeck);
  this.activeDeck.push(this.deck.pop());
}

Game.prototype.addUser = function (val) {

}

exports.Game = Game;
