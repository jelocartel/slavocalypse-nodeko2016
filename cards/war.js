const deck = 'war';

const skills = [{
  name: 'Hands of War God',
  victoryPoints: 1,
  description: 'When gaining a monster, -1 Wound',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 1,
  constDefense: 1,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'War Thunder',
  description: 'At the end of turn choose a player for -1 Wound, then -2 Wounds for you',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Shield of Veles',
  description: 'Change $1 for +1 Attack +1 Defense',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 3,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

const monsters = [{
  amount: 4,
  name: 'Infected Scavenger',
  victoryPoints: 1,
  cardAttack: 2,
  cardHealth: 4,
  description: '',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
},
{
  amount: 8,
  name: 'Strzyga',
  cardAttack: 1,
  cardHealth: 2,
  description: 'Everyone trash 1 monster',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

const items = [{
  name: 'UZI',
  description: '',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 3,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}, {
  name: 'Shotgun',
  description: '',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 3,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
},{
  name: 'Machinegun',
  description: '',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 3,
  constDefense: 2,
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
