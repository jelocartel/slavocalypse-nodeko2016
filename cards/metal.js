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

const monsters = [{
  amount: 4,
  name: 'Scavenger',
  victoryPoints: 2,
  cardAttack: 3,
  cardHealth: 4,
  description: 'When gained, take $ 6 from each player',
  onbuy: function (game, players) {
    const active = game.players[game.activePlayer]
    players.forEach((p) => {
      const take = Math.max(2, p.coins)
      p.coins -= take
      active.coins += take
    })
  }
},
{
  amount: 8,
  name: 'Wolf',
  cardAttack: 6,
  cardHealth: 3,
  victoryPoints: 4,
  onbuy: function (game, players) {
    // TODO
  }
}];

const items = [{
  name: 'Chair',
  description: '',
  victoryPoints: 2,
  description: 'Trash this for +$ 6',
  ontrash: function (game) {
    game.players[game.activePlayer].coins += 6
  }
}, {
  name: 'Machete',
  description: '',
  temporaryAttack: 2,
  victoryPoints: 1,
}, {
  name: 'Pipe',
  temporaryAttack: 1,
  constAttack: 1
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
