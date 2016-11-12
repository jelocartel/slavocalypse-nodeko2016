const deck = 'earth';

const skills = [{
  name: 'Kolovrot rune',
  victoryPoints: 1,
  description: 'Change $2 for 1 Defense',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Veles rune',
  description: 'Trash this for 5 Defense',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Snake rune',
  description: '+$1 on start of each turn',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
