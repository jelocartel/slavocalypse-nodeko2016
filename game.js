'use strict';
const cards = require('./cards.js');

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
    if (action.type === "endTurn") {
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
var shuffle = function (arr) {
  var i = 0, j = 0, temp = null;

  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
Game.prototype.start = function () {
  this.started = true;

  var decksNames = Object.keys(cards.decks);
  shuffle(decksNames);
  decksNames = decksNames.slice(0, this.players.length);
  decksNames.forEach(deck => {
    Array.prototype.push.apply(this.deck, cards.decks[deck]);
  })
  shuffle(this.deck);
  for (var i=0;i<6;i++) {
    this.activeDeck.push(this.deck.pop());
  }
  this.campCard = shuffle(cards.camps).slice(0, 1);
}

Game.prototype.activePlayerBuys = function (action) {
  var activePlayerObj = this.players[this.activePlayer];
 if (activePlayerObj.coins < action.activeCardNumber) {
   console.log("chujnia nie stac cie!");
   return;
 } else {
   if (this.activeDeck[action.activeCardNumber].cardHealth < activePlayerObj.getAttack()) {
     if(this.activeDeck[action.activeCardNumber].cardAttack < activePlayerObj.getDefense()) {
       this.activeDeck[action.activeCardNumber].onbuy(this, action);
     } else {
       console.log("za malo obrony");
       activePlayerObj.addHealth(activePlayerObj.getDefense() - this.activeDeck[action.activeCardNumber].cardAttack)
     }
   } else {
     console.log("za malo ataku");
     return;
   }
 }
 var deck = activePlayerObj.getDeck();

 activePlayerObj.addCoins(-parseInt(action.activeCardNumber));

 switch (this.activeDeck[action.activeCardNumber].type) {
   case "monsters":
     deck.monsters.unshift(this.activeDeck[action.activeCardNumber]);
     break;
   case "items":
     deck.items.unshift(this.activeDeck[action.activeCardNumber]);
     break;
   case "skill":
     deck.skill.unshift(this.activeDeck[action.activeCardNumber]);
     break;
   case "deity":
     deck.deity.unshift(this.activeDeck[action.activeCardNumber]);
     break;
 }
 this.activeDeck.splice(action.activeCardNumber, 1);
 this.activeDeck.push(this.deck.pop());


 if (deck.monsters.length) deck.monsters[0].onfinish(this, action);
 if (deck.items.length) deck.items[0].onfinish(this, action);
 if (deck.skill.length) deck.skill[0].onfinish(this, action);
 if (deck.deity.length) deck.deity[0].onfinish(this, action);

};
Game.prototype.activePlayerFinishGame = function (action) {
  if (this.activeDeck.length) {
    this.trash.push(this.activeDeck[0]);
  }
  //kartaKurwaWioski
  this.campCard.selectAction(this, action.campCardActionId);
  //top stack cards actions
  var deck = this.players[this.activePlayer].getDeck();
  if (deck.monsters.length) deck.monsters[0].onfinish(this, action);
  if (deck.items.length) deck.items[0].onfinish(this, action);
  if (deck.skill.length) deck.skill[0].onfinish(this, action);
  if (deck.deity.length) deck.deity[0].onfinish(this, action);

  this.activeDeck.shift();
  this.activeDeck.push(this.deck.pop());
}

Game.prototype.addUser = function (val) {
  this.players.push(val);
}
exports.Game = Game;
