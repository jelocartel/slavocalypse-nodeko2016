define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    var card = params.card;
    console.log(params);

    var cardData = ko.observable({
      name: card.name,
      tempAttack: card.temporaryAttack,
      tempDefense: card.temporaryDefense,
      attack: card.constAttack,
      defense: card.constDefense,
      victoryPoints: card.victoryPoints,
      action: ''
    });

    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
