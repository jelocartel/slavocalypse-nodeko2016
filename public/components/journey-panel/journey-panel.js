define(['knockout', 'text!./journey-panel.html'], function(ko, template) {
  'use strict';

  function JourneyPanel(params) {
    params = params;

    var journeyDeck = ko.observableArray([]);
  
    var campCard = ko.observable({
      // "name": "JeloCamp",
      // "type": "City",
      // "cardAttack": "3",
      // "cardHealth": "3",
      // "amount": "4",
      // "victoryPoints": "3",
      // "onact": "some action",
      // "onbuy": "some other action",
      // "onfinish": "different action",
      // "temporaryAttack": "1",
      // "temporaryDefense": "1",
      // "constAttack": "1",
      // "constDefense": "1"
    });
    campCard(params.campCard);

    ko.computed(function() {
      journeyDeck(params.activeDeck());;
    });
    return {
      journeyDeck: journeyDeck,
      campCard: campCard
    };
  }

  return { viewModel: JourneyPanel, template: template };

});
