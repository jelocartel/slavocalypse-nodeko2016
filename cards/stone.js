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
  victoryPoints: 1,
  cardAttack: 2,
  cardHealth: 4,
  description: 'When gained, -3 Wounds',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
},
{
  amount: 8,
  name: 'Miner',
  cardAttack: 1,
  cardHealth: 2,
  description: 'When gained, +2 Wounds to everyone but you',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
