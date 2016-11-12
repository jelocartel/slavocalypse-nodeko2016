'use strict';

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

var perun = C({
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

var wpierdol = C({
  amount: 2,
  type: 'skill',
  name: 'Wpierdol',
  constAttack: 3
})

var wladyslaw = C({
  amount: 3,
  type: 'deity',
  name: 'Władysław',
  temporaryAttack: 5,
  temporaryDefense: 3,
  constAttack: 1,
  constDefense: 1
})

var michal = C({
  amount: 1,
  type: 'monster',
  constAttack: 20,
  name: 'Michał'
})

var zenek = C({
  amount: 5,
  type: 'monster',
  constAttack: 10,
  constDefense: 20,
  name: 'Zenek'
})

var piwko = C({
  amount: 10,
  type: 'item',
  constAttack: 5,
  name: 'Piwko'
})

var kolczanPrawilnosci = C({
  amount: 3,
  type: 'item',
  temporaryDefense: 3,
  name: 'Kolczan Prawilnosci'
})

var alko = C({
  amount: 5,
  type: 'deity',
  temporaryAttack: 1,
  name: 'alko'
})

var napierdalanko = C({
  amount: 12,
  type: 'skill',
  constAttach: 3,
  temporaryDefense: 3,
  name: 'napierdalanko'
})

var przemyslanko = C({
  amount: 2,
  type: 'skill',
  constDefense: 10,
  name: 'przemyslanko'
})

var guantanamo = {

}

var decks = {};
decks.green = [ perun, wpierdol, zenek, piwko, alko, przemyslanko ]
decks.red = [ wpierdol, wladyslaw, zenek, piwko, alko, przemyslanko ]
decks.blue = [ michal, wpierdol, zenek, kolczanPrawilnosci, alko, napierdalanko ]
exports.decks = decks;
exports.camps = [ guantanamo ]
