define(['knockout', 'text!./cards-stacks.html'], function(ko, template) {
  'use strict';

  function CardsStacks(params) {
    params = params;
     
    // items = params.deck.items
    var items = ko.observableArray([
      // { 
      //   "name": "czapka wpierdolka",
      //   "type": "item",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // },
      // { 
      //   "name": "kołczan prawilności",
      //   "type": "item",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // }
    ]);
    items(params.playerDecks.items);

    // skills = params.deck.skills
    var skills = ko.observableArray([
      // { 
      //   "name": "zajebanie wpierdolu",
      //   "type": "skill",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "0",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // },
      // { 
      //   "name": "spuszczenie psa",
      //   "type": "skill",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "0"
      // },
      // { 
      //   "name": "ostrzeżenie przed nożem",
      //   "type": "skill",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "0",
      //   "constDefense": "1"
      // }
    ]);
    skills(params.playerDecks.skills);

    // monsters = params.deck.monsters
    var monsters = ko.observableArray([
      // { 
      //   "name": "sebix",
      //   "type": "monster",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // },
      // { 
      //   "name": "kojak frajer",
      //   "type": "monster",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // },
      // { 
      //   "name": "dzielnicowy",
      //   "type": "monster",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // },
      // { 
      //   "name": "rudy społeczniak",
      //   "type": "monster",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // }
    ]);
    monsters(params.playerDecks.monsters);
 
    // deity = params.deck.deity
    var deity = ko.observableArray([
      // { 
      //   "name": "buła konfitura",
      //   "type": "deity",
      //   "cardAttack": "4",
      //   "cardHealth": "1",
      //   "amount": "6",
      //   "victoryPoints": "1",
      //   "onact": "some action",
      //   "onbuy": "some other action",
      //   "onfinish": "different action",
      //   "temporaryAttack": "2",
      //   "temporaryDefense": "1",
      //   "constAttack": "1",
      //   "constDefense": "1"
      // }
    ]);
    deity(params.playerDecks.deity);
    // adding new card in reverse order, newest card has the lowest index

    return {
      items: items,
      skills: skills,
      monsters: monsters,
      deity: deity
    };
  }

  return { viewModel: CardsStacks, template: template };

});
