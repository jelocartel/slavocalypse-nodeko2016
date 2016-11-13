define(['knockout', 'text!./cards-stacks.html'], function(ko, template) {
  'use strict';

  function CardsStacks(params) {
    params = params;
    var useCardActive = params.useCardActive;
    var items = ko.observableArray([]);
    var skills = ko.observableArray([]);
    var monsters = ko.observableArray([]);
    var deity = ko.observableArray([]);
    var pd = params.playerDecks;

    ko.computed(function() {
      items(pd().items);
      skills(pd().skill);
      monsters(pd().monsters);
      deity(pd().deity);
    });

    // adding new card in reverse order, newest card has the lowest index
    var useCard = function(data, evt) {
      var card = evt.target.closest('card');
      var type = card.dataset.type;
      if (useCardActive()) {
        console.log('use card type', type)
        params.socket.send(JSON.stringify({
          event: 'useCard',
          deckType: type,
          game: params.gameName()
        }));
        useCardActive(false);
      }
    };

    return {
      items: items,
      skills: skills,
      monsters: monsters,
      deity: deity,
      useCard: useCard
    };
  }

  return { viewModel: CardsStacks, template: template };

});
