// knockout syntax (observable etc.)

pickPlayer = function(evt) {
  var id = evt.target.id;
  // get player from players list with id === id
  // set as active player
};

multipleWounds = function(param) {
  activePlayer.wounds(activePlayer.wounds * param);
};

addWounds = function(param) {
  activePlayer.wounds(activePlayer.wounds + param);
};

multipleCash = function(param) {
  activePlayer.cash(activePlayer.cash * param);
};

addCash = function(param) {
  activePlayer.cash(activePlayer.cash + param);
};

removeMonster = function() {
  
};
