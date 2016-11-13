const deck = 'three';

const skills = [{
  name: 'Three of Gods',
  victoryPoints: 1,
}, {
  name: 'Grass Thunder',
  temporaryAttack: 1,
  temporaryDefense: 1,
  constAttack: 4,
  constDefense: 1,
}, {
  name: 'Triskelion',
}];

const monsters = [{
  amount: 8,
  name: 'Dziad',
  victoryPoints: 6,
  cardAttack: 8,
  cardHealth: 3,
  description: 'When trashed, gain 3 Attack',
  ontrash: function (game) {
    game.players[game.activePlayer].additionalAttack += 3
  }
},
{
  amount: 4,
  name: 'Ent',
  cardAttack: 2,
  cardHealth: 5,
  onbuy: function (game, players) {
    game.players[game.activePlayer].health += 4
  }
}];

const items = [{
  name: 'Slingshot',
  description: 'When staying in the camp, heal 2',
  temporaryAttack: 1,
  constDefense: 1,
  onfinish: function (game) {
    game.players[game.activePlayer].health += 2
  }
}, {
  name: 'Wooden Club',
  temporaryAttack: 1,
  temporaryDefense: 1,
},{
  name: 'Stick',
  temporaryDefense: 1,
  constAttack: 1,
  victoryPoints: 1,
  ontrash: function (game) {
    game.players[game.activePlayer].addCoins(10)
  }
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
