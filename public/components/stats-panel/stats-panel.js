define(['knockout', 'text!./stats-panel.html'], function(ko, template) {
  'use strict';

  function StatsPanel(params) {
    params = params;
    // initial values, later currrent values for activePlayer
    var cash = ko.observable(5);
    var wound = ko.observable(0);
    var attack = ko.observable(0);
    var defence = ko.observable(0);

    return {
      cash: cash,
      wound: wound,
      attack: attack,
      defence: defence
    };
  }

  return { viewModel: StatsPanel, template: template };

});
