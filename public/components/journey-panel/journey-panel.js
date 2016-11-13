define(['knockout', 'text!./journey-panel.html'], function(ko, template) {
  'use strict';

  function JourneyPanel(params) {
    params = params;

    var journeyDeck = ko.observableArray([]);
    var pickingActive = params.pickingCardActive;

    var buyCard = function(data, evt) {
      var card = evt.target.closest('card');
      var index = card.dataset.index;
      if (pickingActive()) {
        console.log('buy card index', index)
        params.socket.send(JSON.stringify({
          event: 'buy',
          activeCardNumber: index,
          game: params.gameName()
        }));
        pickingActive(false); 
      }
    };

    ko.computed(function() {
      journeyDeck(params.activeDeck());
    });

    return {
      journeyDeck: journeyDeck,
      campCard: params.campCard,
      buyCard: buyCard
    };
  }

  return { viewModel: JourneyPanel, template: template };

});
