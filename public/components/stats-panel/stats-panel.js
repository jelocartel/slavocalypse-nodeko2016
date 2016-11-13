define(['knockout', 'text!./stats-panel.html'], function(ko, template) {
  'use strict';

  function StatsPanel(params) {
    // initial values, later currrent values for activePlayer
    var cash = ko.observable(5);
    var wounds = ko.observable(0);
    var attack = ko.observable(0);
    var defense = ko.observable(0);
    // console.log(params);

    ko.computed(function() {
      cash(params.player().coins);
      wounds(params.player().health * -1);
      attack(params.player().attack);
      defense(params.player().defense);
      // console.log(cash())
    });

    return {
      cash: cash,
      wounds: wounds,
      attack: attack,
      defense: defense
    };
  }

  return { viewModel: StatsPanel, template: template };

});
