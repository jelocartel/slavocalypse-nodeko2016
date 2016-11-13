define(['knockout', 'text!./turn-control-panel.html'], function(ko, template) {
  'use strict';

  function TurnControlPanel(params) {
    params = params;
    
    var campCard = ko.observable({});
    var pickingActive = params.pickingCardActive;

    var endTurn = function() {

    };

    var pickCard = function(data, evt) {
      pickingActive(true);
      console.log('now pick a card', pickingActive())
      // pick card form journey panel
    };

    var stayInCity = function() {
      $('#camp-actions-container').addClass('visible');
      // do action from city card
    };

    var useCard = function() {
      // use one of your card
    };

    ko.computed(function() {
      campCard(params.campCard());
    });
    console.log('elo pickingActive ? ', pickingActive())

    return {
      endTurn: endTurn,
      pickCard: pickCard,
      stayInCity: stayInCity,
      useCard: useCard,
      campCard: campCard
    };
  }

  return { viewModel: TurnControlPanel, template: template };

});
