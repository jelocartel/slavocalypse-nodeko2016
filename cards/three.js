const deck = 'three';

const skills = [{
  name: 'Hands of War God',
  victoryPoints: 1,
  description: 'When gaining a monster, -1 wound',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'War Thunder',
  description: 'At the end of turn choose a player for -1 wound, then -2 wound for you',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Shield of Veles',
  description: 'Change $1 for +1 Attack +1 Defense',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
