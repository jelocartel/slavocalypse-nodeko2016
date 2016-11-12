define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    params = params;

    var cardData = ko.observable({
      name: 'artem skurwesyn z polis kurwa hue hue',
      tempAttack: 4,
      tempDefense: 1,
      attack: 2,
      defense: 2,
      victoryPoints: 0,
      action: 'Kill yourself when picking this card'
    });

    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
