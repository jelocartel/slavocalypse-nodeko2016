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
  this.started = false;
  this.victory = [];
  this.gameLog = [];
  EventEmitter.call(this)
};
util.inherits(Game, EventEmitter)

var logAdd = function (game, msg) {
  game.gameLog.push({
    playerId: game.players[game.activePlayer].id,
    userMsg: msg,
  });
}
Game.prototype.gameLoop = function(action) {
  if ((this.deck.length+this.activeDeck.length) > 0) {
    if (action.type === "endTurn") {
      this.activePlayerFinishGame(action);
    } else if (action.type === "buy") {
      if(!this.activePlayerBuys(action)) {
        return;
      }
    } else if(action.type === "useCard") {
      this.useCard(action);
      //bo użycie nie zmienia gracza i nie emittujemy zadnych gowien
      return;
    }
    if ((this.deck.length+this.activeDeck.length) === 0) {
      //Game FINISH
      //podlicz punkty i przygotuj obiekt :D
      logAdd(this, "Game finished");
      for(let j=0;j<this.players.length;j++) {
        this.victory.push({
          id: this.players[j].id,
          points: this.players[j].getVictoryPoints(this),
        });
      }
      this.players.forEach(function(p) {
        console.log(p.getVictoryPoints());

      })
      this.emit('gameFinish');
      return;
    }
    this.activePlayer++;
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
      this.players.forEach(p => {
        p.additonalDefense = 0
        p.additonalAttack = 0
      })
      this.emit('roundFinish');
    } else {
      this.emit('turnFinish')
    }
  }

}
Game.prototype.useCard = function(action) {
  logAdd(this, "You are using " + action);
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
   logAdd(this, "Sorry, this item is to expensive. You have " + activePlayerObj.coins +
                "but you need " + action.activeCardNumber + " coins!");
   return false;
 } else {
   if (this.activeDeck[action.activeCardNumber].cardHealth <= activePlayerObj.getAttack()) {
     if(this.activeDeck[action.activeCardNumber].cardAttack <= activePlayerObj.getDefense()) {
       logAdd(this, "Just both new item");
       this.activeDeck[action.activeCardNumber].onbuy(this, action);
     } else {
       logAdd(this, "got " +(this.activeDeck[action.activeCardNumber].cardAttack - addHealth(activePlayerObj.getDefense())) +
                     " new wounds");
       activePlayerObj.addHealth(activePlayerObj.getDefense() - this.activeDeck[action.activeCardNumber].cardAttack)
     }
   } else {
     logAdd(this, "Sorry, you need more attack points")
     return false;
   }
 }
 logAdd(this, "You both card!")
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
 if(this.deck.length > 0)
  this.activeDeck.push(this.deck.pop());


 if (deck.monsters.length) deck.monsters[0].onfinish(this, action);
 if (deck.items.length) deck.items[0].onfinish(this, action);
 if (deck.skill.length) deck.skill[0].onfinish(this, action);
 if (deck.deity.length) deck.deity[0].onfinish(this, action);
 return true;

};

Game.prototype.selcetCampAction = function(action) {
  var gameObj = this;
  this.campCard.onfinish.forEach(function(elem) {
    if (elem.id == action.campCardActionId) {
      elem.action(gameObj);
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
  if(this.deck.length > 0)
    this.activeDeck.push(this.deck.pop());
  logAdd(this, "You finishd your turn");
}

Game.prototype.addUser = function (val) {
  if(!this.started)
    this.players.push(val);
}
exports.Game = Game;
