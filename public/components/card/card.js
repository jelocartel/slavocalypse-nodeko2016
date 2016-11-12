define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    var card = params.card || {};

    if (typeof card === 'function') {
      card = card();
    }

    var randName = ['jerylo', 'perun', 'svetovit', 'veles', 'svarog'];
    var name = randName[~~(Math.random() * randName.length)];

    var cardData = ko.observable({
      name: name,//card.name,
      tempAttack: card.temporaryAttack,
      tempDefense: card.temporaryDefense,
      attack: card.constAttack,
      defense: card.constDefense,
      victoryPoints: card.victoryPoints,
      action: 'zajeb komuś wpierdol',
      image: 'd/' + name + '.png'
    });

    return {
      cardData: cardData
    };
  }

  return { viewModel: Card, template: template };

});
