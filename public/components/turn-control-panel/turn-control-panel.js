define(['knockout', 'text!./turn-control-panel.html'], function(ko, template) {
  'use strict';

  function TurnControlPanel(params) {
    params = params;
    // initial values, later currrent values for activePlayer
    var endTurn = function() {
      // end turn
    };

    var pickCard = function() {
      // pick card form journey panel
    };

    var stayInCity = function() {
      // do action from city card
    };

    var useCard = function() {
      // use one of your card
    };

    return {
      endTurn: endTurn,
      pickCard: pickCard,
      stayInCity: stayInCity,
      useCard: useCard
    };
  }

  return { viewModel: TurnControlPanel, template: template };

});
