const deck = 'earth';

const skills = [{
  name: 'Kolovrot',
  victoryPoints: 1,
  description: 'Change $2 for 1 Defense',
  temporaryAttack: 1,
  temporaryDefense: 1,
  constAttack: 2,
  constDefense: -1,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Rune of Earth',
  description: 'Trash this for 5 Defense',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Snake sign',
  description: '+$1 on start of each turn',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
