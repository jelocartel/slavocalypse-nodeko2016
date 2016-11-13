'use strict';
const util = require('util')
const EventEmitter = require('events').EventEmitter
const cards = require('./cards.js');

var Game = function() {
  this.deck = new Array();
  this.activeDeck = new Array();
  this.trash = new Array();
  this.players = new Array();
  this.activePlayer = 0;
  this.campCard = {};
  this.started = false
  EventEmitter.call(this)
};
util.inherits(Game, EventEmitter)

Game.prototype.gameLoop = function(action) {
  if (this.deck.length+this.activeDeck.length) {
    if (action.type === "endTurn") {
      this.activePlayerFinishGame(action);
    } else if (action.type === "buy") {
      this.activePlayerBuys(action);
    } else if(action.type === "useCard") {
      this.useCard(action);
      //bo użycie nie zmienia gracza i nie emittujemy zadnych gowien
      return;
    }
    this.activePlayer++;
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
      this.players.forEach(p => {
        p.additonalDefense = 0
        p.additonalAttack = 0
      })
      this.emit('roundFinish')
    } else {
      this.emit('turnFinish')
    }
  } else {
    //Game FINISH
    //podlicz punkty i przygotuj obiekt :D
    this.emit('gameFinish')
  }

}
this.useCard = function(action) {
  switch (this.deckType) {
    case "monster":
      deck.monsters[0].onact(this, action);
      break;
    case "item":
      deck.items[0].onact(this, action);
      break;
    case "skill":
      deck.skill[0].onact(this, action);
      break;
    case "deity":
      deck.deity[0].onact(this, action);
      break;
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
  if (!this.started) {
    this.started = true;

    var decksNames = Object.keys(cards.decks);
    shuffle(decksNames);
    decksNames = decksNames.slice(0, this.players.length);
    decksNames.forEach(deck => {
      Array.prototype.push.apply(this.deck, cards.decks[deck]);
    });

    shuffle(this.deck);
    for (var i=0;i<6;i++) {
      this.activeDeck.push(this.deck.pop());
    }

    shuffle(cards.camps);
    this.campCard = cards.camps.slice(0, 1)[0];
  }
}

Game.prototype.activePlayerBuys = function (action) {
  var activePlayerObj = this.players[this.activePlayer];
 if (activePlayerObj.coins < action.activeCardNumber) {
   console.log("chujnia nie stac cie!");
   return;
 } else {
   if (this.activeDeck[action.activeCardNumber].cardHealth <= activePlayerObj.getAttack()) {
     if(this.activeDeck[action.activeCardNumber].cardAttack <= activePlayerObj.getDefense()) {
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
   case "monster":
     deck.monsters.unshift(this.activeDeck[action.activeCardNumber]);
     break;
   case "item":
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

Game.prototype.selcetCampAction = function(action) {
  this.campCard.onfinish.forEach(function(elem) {
    if (elem.id == action.campCardActionId) {
      elem.action(this);
    }
  });
}

Game.prototype.activePlayerFinishGame = function (action) {
  if (this.activeDeck.length) {
    this.trash.push(this.activeDeck[0]);
  }
  //kartaKurwaWioski
  if (0 < action.campCardActionId)
    this.selcetCampAction(action);
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
