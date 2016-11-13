const deck = 'earth';

const skills = [{
  name: 'Kolovrot',
  temporaryDefense: -1,
  onbuy: function (game) {
    const player = game.players[game.activePlayer]
    game.on('turnFinish', () => {
      player.health += 1
    })
  }
}, {
  name: 'Rune of Earth',
  temporaryDefense: 1,
  constAttack: 2
}, {
  name: 'Snake sign',
  temporaryAttack: 1,
  temporaryDefense: 1,
  onbuy: function (game, players) {
    // TODO
  }
}];

const monsters = [{
  amount: 8,
  name: 'Earth Mutant',
  victoryPoints: 4,
  cardAttack: 2,
  cardHealth: 2,
  constAttack: -1,
  constDefense: -1,
  // description: 'When gained, chosen player gets -$2',
  // onbuy: function (game, players) {
  //   players[0].coins = Math.max(0, p.coins - 1)
  // }
},
{
  amount: 4,
  name: 'Mountain Wolf',
  cardAttack: 6,
  cardHealth: 3,
  victoryPoints: 5,
  // description: 'When gained, +$3 for you and -$1 for others',
  // onbuy: function (game, players) {
  //   game.players.each(p => {
  //     p.coins = Math.max(0, p.coins - 1)
  //   })
  //   game.players[game.activePlayer].coins += 4
  // }
}];

const items = [{
  name: 'Granade',
  description: '',
  temporaryAttack: 1,
  constDefense: 1,
  victoryPoints: 1,
  onbuy: function (game, players) {
    game.players[game.activePlayer].health += 2
  }
}, {
  name: 'Trashbin',
  description: '',
  temporaryDefense: 1,
  constDefense: 1,
  onfinish: function (game) {
    game.players[game.activePlayer].coins += 4
  }
},{
  name: 'Soda Can',
  description: '',
  temporaryDefense: 1
  // XXX
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
