const deck = 'war';

const skills = [{
  name: 'Hands of War God',
  victoryPoints: 1,
  description: 'When gaining a monster, -1 wound',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'War Thunder of Perun',
  description: 'Trash this for +5 Attack agains Deities',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Perun\'s Thunder rune',
  description: 'When gained, +6 wounds',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
