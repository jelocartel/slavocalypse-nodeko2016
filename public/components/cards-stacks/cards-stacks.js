define(['knockout', 'text!./cards-stacks.html'], function(ko, template) {
  'use strict';

  function CardsStacks(params) {
    params = params;
    // initial values, later currrent values for activePlayer
    var items = ko.observable([1,2]);
    var skills = ko.observable(['a', 'b', 'c']);
    var monsters = ko.observable(['1','2','3','4']);
    var deity = ko.observable(['elo']);
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
