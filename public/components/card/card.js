define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    var cardObs = ko.observable({});
    var cardData = ko.observable({});

    var nameToImage = function(name) {
      return name.replace(/[^a-zA-Z]/g, "").toLowerCase();
    };

    ko.computed(function() {
      cardObs(typeof params.card === 'function' ? params.card() : params.card);

      
      var card = cardObs();
      var image = card.type && card.name ? card.type.charAt(0) + '/' + nameToImage(card.name) + '.png' : '';
      cardData({
        name: card.name,
        tempAttack: card.temporaryAttack,
        tempDefense: card.temporaryDefense,
        attack: card.constAttack,
        defense: card.constDefense,
        victoryPoints: card.victoryPoints,
        action: card.description || '',
        image:  image, 
        cardAttack: card.cardAttack || 0,
        cardHealth: card.cardHealth || 0
      });
    });
    
    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
