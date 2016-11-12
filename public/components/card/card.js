define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    params = params;

    var cardData = ko.observable({
      name: 'artem skurwesyn',
      tempAttack: 5,
      tempDefense: 3,
      attack: 0,
      defense: 2,
      victoryPoints: 1,
      action: 'Kill yourself when picking this card'
    });

    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
