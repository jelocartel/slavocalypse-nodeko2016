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

var Camp = function SerializableCampFactoryFactoryBeanFactory(o) {
  return {
    type: "camp",
    amount: 0,
    victoryPoints: o.victoryPoints || 0,
    // Called when a card gets to a
    onact: o.onact || marcin,
    onfinish: o.onfinish || [{}],
    temporaryAttack: o.temporaryAttack || 0,
    temporaryDefense: o.temporaryDefense || 0,
    constAttack: o.constAttack || 0,
    constDefense: o.constDefense || 0,
    name: o.name,
    description: o.description || '',
    cardID: o.cardID,
  }
}

var guantanamo = Camp({
  name: 'spokojnie Andrzeju...',
  onfinish: [
    {
      id: 1,
      name: "...to sie wyklepie",
      action: marcin,
    },
    {
      id: 2,
      name: "ilu programistow?!",
      action: marcin,
    }
  ]
})

var decksDefinitions = {
  earth: require('./cards/earth'),
  metal: require('./cards/metal'),
  stone: require('./cards/stone'),
  tree: require('./cards/tree'),
  war: require('./cards/war')
};
var decks = {};

for (let deck in decksDefinitions) {
  let deckName = decksDefinitions[deck].name;
  decks[deckName] = [];
  decksDefinitions[deck].skills.forEach(function(skill) {
    skill.amount = 3;
    decks[deckName] = C(skill);
  });
}

exports.decks = decks;
exports.camps = [ guantanamo ]
