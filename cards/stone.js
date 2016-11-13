const deck = 'stone';

const skills = [{
  name: 'Hands of God',
  victoryPoints: 1,
  description: 'At the en of the turn chose player that -$1',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Shield of Perun',
  description: 'Trash this for +5 Attack agains Deities',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Perun\'s Thunder',
  description: 'When gained, +6 Wounds',
  temporaryAttack: 1,
  temporaryDefense: 2,
  constAttack: 2,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

const monsters = [{
  amount: 4,
  name: 'Golem',
  victoryPoints: 6,
  cardAttack: 2,
  cardHealth: 8,
  description: 'When gained, -3 Wounds',
  onbuy: function (game, players) {
    game.players[game.activePlayer].addCoins(-2)
  }
},
{
  amount: 8,
  name: 'Miner',
  cardAttack: 3,
  cardHealth: 3,
  victoryPoints: 3
}];

const items = [{
  name: 'Knife',
  temporaryDefense: 1,
  constDefense: 1,
  victoryPoints: 2
}, {
  name: 'Lighter',
  description: '',
  constDefense: 1,
  onbuy: function (game, players) {
    // XXX
  }
},{
  name: 'Rock',
  description: 'Pay $ 2 for 3 Defense',
  constDefense: 1,
  onact: function (game, players) {
    const p = game.players[game.activePlayer]
    if (p.coins >= 2) {
      p.addCoins(-2)
      p.additionalDefense += 3
    }
  },
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
