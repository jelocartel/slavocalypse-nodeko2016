const deck = 'metal';

const skills = [{
  name: 'Metal Kolovrot',
  victoryPoints: 1,
  description: 'At start of the turn, -1 Wound',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Metal Snake',
  description: 'Trash this, +5 Defense',
  temporaryAttack: 1,
  temporaryDefense: 1,
  constAttack: 1,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Metal Hands of God',
  description: 'Change $2 for 2 Attack',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
module.exports.name = deck;
