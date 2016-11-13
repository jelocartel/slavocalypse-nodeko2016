define(['knockout', 'text!./turn-control-panel.html'], function(ko, template) {
  'use strict';

  function TurnControlPanel(params) {
    params = params;
    // var endChoiceId = ko.observable(0);
    var campCard = ko.observable({});
    // var endCampActionId = ko.observable(params.endCampActionId);
    // initial values, later currrent values for activePlayer
    var endActionChoice = function() {
      $('#camp-actions-container').addClass('visible');
    };

    var sendEnd = function(data, evt) {
      // var chosenId = evt.target.id;
      // console.log(chosenId);
      // endCampActionId(chosenId);
      // $root.network.endTurn;
      // here run network end turn funx=ction with parametr = chosemId
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

    ko.computed(function() {
      campCard(params.campCard());
    });

    return {
      endActionChoice: endActionChoice,
      pickCard: pickCard,
      stayInCity: stayInCity,
      useCard: useCard,
      sendEnd: sendEnd,
      campCard: campCard
    };
  }

  return { viewModel: TurnControlPanel, template: template };

});
