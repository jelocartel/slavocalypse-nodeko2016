define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    var card = params.card || {};

    if (typeof card === 'function') {
      card = card();
    }

    var nameToImage = function(name) {
      return name.replace(/[^a-zA-Z]/g, "").toLowerCase();
    };

    card.type = card.type || 'c';
    card.name = card.name || 'ee';
    var cardData = ko.observable({
      name: card.name,
      tempAttack: card.temporaryAttack,
      tempDefense: card.temporaryDefense,
      attack: card.constAttack,
      defense: card.constDefense,
      victoryPoints: card.victoryPoints,
      action: card.description || '',
      image: card.type.charAt(0) + '/' + nameToImage(card.name) + '.png',
      cardAttack: card.cardAttack || 0,
      cardHealth: card.cardHealth || 0
    });

    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
