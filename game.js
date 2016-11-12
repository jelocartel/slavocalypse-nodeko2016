var Game = function() {
  this.deck = new Array();
  this.activeDeck = new Array();
  this.trash = new Array();
  this.players = new Array();
  this.activePlayer = 0;
  this.startHooks = new Array();
  this.campCard = {};
  this.hooks =  {
    onTurnFinish: function(self){},
    onRoundFinish: function(self){},
    onGameFinish: function(winObj){}
  }
  this.started = false
};

Game.prototype.gameLoop = function(action) {
  if (this.deck.length+this.activeDeck.length) {
    if (action.type === "finish") {
      this.activePlayerFinishGame(action);
    } else if (action.type === "buy") {

    }
    this.activePlayer++;
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
      this.hooks.onRoundFinish(this);
    } else {
      this.hooks.onTurnFinish(this);
    }
  } else {
    //Game FINISH
    //podlicz punkty i przygotuj obiekt :D
    this.hooks.onGameFinish("dupaDupa");
  }

}

Game.prototype.start = function () {
  this.started = false
}
Game.prototype.activePlayerBuys = function () {

};
Game.prototype.activePlayerFinishGame = function (action) {
  if (this.activeDeck.length) {
    this.trash.push(this.activeDeck[0]);
  }
  //kartaKurwaWioski
  this.campCard.selectAction(this, action.campCardActionId);
  //top stack cards actions
  var deck = this.players[this.activePlayer].getDeck();
  if (deck.monsters.length) deck.monsters[deck.monsters.length - 1].onfinish(this, action);
  if (deck.dragons.length) deck.dragons[deck.dragons.length - 1].onfinish(this, action);
  if (deck.skill.length) deck.skill[deck.skill.length - 1].onfinish(this, action);
  if (deck.deity.length) deck.deity[deck.deity.length - 1].onfinish(this, action);

  this.activeDeck = shift(this.activeDeck);
  this.activeDeck.push(this.deck.pop());
}

Game.prototype.addUser = function (val) {

}
exports.Game = Game;
