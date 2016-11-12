'use strict'

var C = function SerializableCardFactoryFactoryBeanFactory(o) {
  return {
    amount: o.amount || 1,
    victoryPoints: o.victoryPoints || 0,
    type: o.type,
    // Called when a card gets to act.
    onact: o.onact,
    onbuy: o.buy,
    onfinish: o.onfinish
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
