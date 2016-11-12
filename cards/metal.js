const deck = 'metal';

const skills = [{
  name: 'Three of Gods',
  victoryPoints: 1,
  description: 'Chosen player trashes top Rune card',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Grass Thunder',
  description: 'At start of the turn, -1 Wound',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Triskelion',
  description: 'Trash monster, +5 Attack',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.skills = skills;
