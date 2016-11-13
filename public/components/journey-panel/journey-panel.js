define(['knockout', 'text!./journey-panel.html'], function(ko, template) {
  'use strict';

  function JourneyPanel(params) {
    params = params;

    var journeyDeck = ko.observableArray([]);
    

    ko.computed(function() {
      journeyDeck(params.activeDeck());
    });
    
    return {
      journeyDeck: journeyDeck,
      campCard: params.campCard
    };
  }

  return { viewModel: JourneyPanel, template: template };

});
