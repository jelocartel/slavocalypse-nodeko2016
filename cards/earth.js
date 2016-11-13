const deck = 'earth';

const skills = [{
  name: 'Kolovrot',
  victoryPoints: 1,
  description: 'Change $2 for 1 Defense',
  temporaryAttack: -2,
  temporaryDefense: -1,
  constAttack: 2,
  constDefense: 1,
  onact: function (game, players) {
    game.players[game.activePlayer].coins -= 2
    game.players[game.activePlayer].additionalDefense += 2
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

const monsters = [{
  amount: 4,
  name: 'Earth Mutant',
  victoryPoints: 1,
  cardAttack: 2,
  cardHealth: 4,
  description: 'When gained, chosen player gets -$2',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
},
{
  amount: 8,
  name: 'Mountain Wolf',
  cardAttack: 1,
  cardHealth: 2,
  description: 'When gained, +$3 for you and -$1 for others',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
