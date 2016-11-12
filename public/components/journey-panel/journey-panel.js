define(['knockout', 'text!./journey-panel.html'], function(ko, template) {
  'use strict';

  function JourneyPanel(params) {
    params = params;

    var journeyDeck = ko.observableArray([
      { 
        "name": "artem skurwesyn z polis kurwa hue hue",
        "type": "monster",
        "cardAttack": "4",
        "cardHealth": "1",
        "amount": "6",
        "victoryPoints": "1",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "2",
        "temporaryDefense": "1",
        "constAttack": "1",
        "constDefense": "1"
      },
      { 
        "name": "ziom",
        "type": "monster",
        "cardAttack": "2",
        "cardHealth": "3",
        "amount": "2",
        "victoryPoints": "2",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "1",
        "temporaryDefense": "2",
        "constAttack": "2",
        "constDefense": "2"
      },
      { 
        "name": "wariacik",
        "type": "monster",
        "cardAttack": "3",
        "cardHealth": "3",
        "amount": "4",
        "victoryPoints": "3",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "1",
        "temporaryDefense": "1",
        "constAttack": "1",
        "constDefense": "1"
      },
      { 
        "name": "artem skurwesyn z polis kurwa hue hue",
        "type": "monster",
        "cardAttack": "4",
        "cardHealth": "1",
        "amount": "6",
        "victoryPoints": "1",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "2",
        "temporaryDefense": "1",
        "constAttack": "1",
        "constDefense": "1"
      },
      { 
        "name": "ziom",
        "type": "monster",
        "cardAttack": "2",
        "cardHealth": "3",
        "amount": "2",
        "victoryPoints": "2",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "1",
        "temporaryDefense": "2",
        "constAttack": "2",
        "constDefense": "2"
      },
      { 
        "name": "wariacik",
        "type": "monster",
        "cardAttack": "3",
        "cardHealth": "3",
        "amount": "4",
        "victoryPoints": "3",
        "onact": "some action",
        "onbuy": "some other action",
        "onfinish": "different action",
        "temporaryAttack": "1",
        "temporaryDefense": "1",
        "constAttack": "1",
        "constDefense": "1"
      },
    ]);
  
    var campCard = ko.observable({
      "name": "JeloCamp",
      "type": "City",
      "cardAttack": "3",
      "cardHealth": "3",
      "amount": "4",
      "victoryPoints": "3",
      "onact": "some action",
      "onbuy": "some other action",
      "onfinish": "different action",
      "temporaryAttack": "1",
      "temporaryDefense": "1",
      "constAttack": "1",
      "constDefense": "1"
    });

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello,
      journeyDeck: journeyDeck,
      campCard: campCard
    };
  }

  return { viewModel: JourneyPanel, template: template };

});
