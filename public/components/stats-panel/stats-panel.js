define(['knockout', 'text!./stats-panel.html'], function(ko, template) {
  'use strict';

  function StatsPanel(params) {
    // initial values, later currrent values for activePlayer
    var cash = ko.observable(5);
    var wounds = ko.observable(0);
    var attack = ko.observable(0);
    var defense = ko.observable(0);
    var cardsLeft = ko.observable(0);
    var score = ko.observableArray([]);
    // console.log(params);
    var closeScore = function() {
      $('#score-container').removeClass('visible');
      window.location.hash = '#';
    };

    ko.computed(function() {
      cash(params.player().coins);
      wounds(params.player().health * -1);
      attack(params.player().attack);
      defense(params.player().defense);
      cardsLeft(params.cardsLeft());
      score(params.score());
      // console.log(cash())
    });

    return {
      cash: cash,
      wounds: wounds,
      attack: attack,
      defense: defense,
      cardsLeft: cardsLeft,
      score: score,
      closeScore: closeScore
    };
  }

  return { viewModel: StatsPanel, template: template };

});
