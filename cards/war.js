const deck = 'war';

const skills = [{
  name: 'Hands of War God',
  temporaryAttack: 1,
  constAttack: 1
}, {
  name: 'War Thunder',
  temporaryAttack: 3
}, {
  name: 'Shield of Veles',
  temporaryAttack: -3,
  temporaryDefense: 3,
}];

const monsters = [{
  amount: 4,
  name: 'Infected Scavenger',
  victoryPoints: 3,
  cardAttack: 5,
  cardHealth: 2,
  description: 'Deal 2 Damage to everyone',
  onact: function (game, players) {
    game.players.forEach((p, i) => {
      if (i !== game.activePlayer) p.health -= 2
    })
  }
},
{
  amount: 8,
  name: 'Strzyga',
  cardAttack: 2,
  cardHealth: 2,
  victoryPoints: 2,
}];

const items = [{
  name: 'UZI',
  temporaryAttack: 2,
  constAttack: 2,
  constDefense: -1,
}, {
  name: 'Shotgun',
  temporaryAttack: 1,
  constAttack: 2,
  victoryPoints: 1,
},{
  name: 'Machinegun',
  temporaryDefense: 1,
  victoryPoints: 1,
}];

module.exports.items = items;
module.exports.monsters = monsters;
module.exports.skills = skills;
module.exports.name = deck;
