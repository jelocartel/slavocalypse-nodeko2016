define(['knockout', 'text!./stats-panel.html'], function(ko, template) {
  'use strict';

  function StatsPanel(params) {
    // initial values, later currrent values for activePlayer
    var cash = ko.observable(5);
    var wounds = ko.observable(0);
    var attack = ko.observable(0);
    var defence = ko.observable(0);
    console.log(params);

    ko.computed(function() {
      cash(params.player().coins);
      wounds(param.player().health * -1);
      attack(param.player().attack);
      defence(param.player().defence);
      // console.log(cash())
    });

    return {
      cash: cash,
      wounds: wounds,
      attack: attack,
      defence: defence
    };
  }

  return { viewModel: StatsPanel, template: template };

});
