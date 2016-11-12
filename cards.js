'use strict'

function marcin() {}

const TYPES = ['item', 'skill', 'monster', 'deity']

var C = function SerializableCardFactoryFactoryBeanFactory(o) {
  return {
    type: o.type,
    cardAttack: o.cardAttack,
    cardHealth: o.cardHealth,
    amount: o.amount,
    victoryPoints: o.victoryPoints || 0,
    // Called when a card gets to act.
    onact: o.onact || marcin,
    onbuy: o.buy || marcin,
    onfinish: o.onfinish || marcin,
    temporaryAttack: o.temporaryAttack || 0,
    temporaryDefense: o.temporaryDefense || 0,
    constAttack: o.constAttack || 0,
    constDefense: o.constDefense || 0,
    name: o.name,
    description: o.description || '',
    cardID: o.cardID,
  }
}

exports.perun = C({
  amount: 1,
  victoryPoints: 1,
  type: 'monster',
  name: 'Evil Captain',
  description: 'Aye aye captain!',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
});

exports.wpierdol = C({
  amount: 2,
  type: 'skill',
  name: 'wpierdol!',
  constAttack: 3
})

exports.wladyslaw = C({
  amount: 3,
  type: 'deity',
  name: 'wladyslaw',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 1,
  constDefense: 1
})

exports.green = [ exports.perun, exports.wpierdol ]
exports.red = [ exports.wpierdol, exports.wladyslaw ]
