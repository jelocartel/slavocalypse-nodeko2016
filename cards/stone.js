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
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
