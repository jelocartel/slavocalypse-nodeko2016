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
  }
}

exports.EvilCaptain = C({
  amount: 1,
  victoryPoints: 1,
  type: 'monster',
  onact: function (game, players) {
  },
  onbuy: function (game, players) {
  }
});
