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
      activePlayerBuys(action);
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
  this.started = true
}

Game.prototype.activePlayerBuys = function (action) {
  var activePlayerObj = this.players[this.activePlayer];
 if (activePlayerObj.conis< action.activeCardNumber) {
   console.log("chujnia nie stac cie!");
   return;
 } else {
   if (this.activeDeck[action.activeCardNumber].cardHealth < activePlayerObj.getAttack()) {
     if(this.activeDeck[action.activeCardNumber].cardAttack < activePlayerObj.getDefense()) {
       this.activeDeck[action.activeCardNumber].onbuy(this, action);
     } else {
       console.log("za malo obeony");
     }
   } else {
     console.log("za malo ataku");
   }
 }
 var deck = activePlayerObj.getDeck();

 switch (this.activeDeck[action.activeCardNumber].type) {
   case "monsters":
     deck.monsters.push(this.activeDeck[action.activeCardNumber]);
     break;
   case "dragons":
     deck.dragons.push(this.activeDeck[action.activeCardNumber]);
     break;
   case "skill":
     deck.skill.push(this.activeDeck[action.activeCardNumber]);
     break;
   case "deity":
     deck.deity.push(this.activeDeck[action.activeCardNumber]);
     break;
 }
 this.activeDeck.splice(action.activeCardNumber, 1);
 this.activeDeck.push(this.deck.pop());


 if (deck.monsters.length) deck.monsters[deck.monsters.length - 1].onfinish(this, action);
 if (deck.dragons.length) deck.dragons[deck.dragons.length - 1].onfinish(this, action);
 if (deck.skill.length) deck.skill[deck.skill.length - 1].onfinish(this, action);
 if (deck.deity.length) deck.deity[deck.deity.length - 1].onfinish(this, action);

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
