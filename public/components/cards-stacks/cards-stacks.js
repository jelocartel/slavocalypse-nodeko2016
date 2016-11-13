define(['knockout', 'text!./cards-stacks.html'], function(ko, template) {
  'use strict';

  function CardsStacks(params) {
    params = params;
    var useCardActive = params.useCardActive;
     
    // items = params.deck.items
    var items = ko.observableArray([]);
    items(params.playerDecks.items);

    // skills = params.deck.skills
    var skills = ko.observableArray([]);
    skills(params.playerDecks.skill);

    // monsters = params.deck.monsters
    var monsters = ko.observableArray([]);
    monsters(params.playerDecks.monsters);
 
    // deity = params.deck.deity
    var deity = ko.observableArray([]);
    deity(params.playerDecks.deity);
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
