function marcin() {}

module.exports = [{
  name: 'GTNM',
  onfinish: [
    {
      id: 1,
      name: "Get $5, others -1 Wound",
      action: function(game) {
        game.players[game.activePlayer].coins += 5;
        game.players.forEach(function(player) {
          player.addHealth(1);
        });
      }
    },
    {
      id: 2,
      name: "Heal 2 Wounds, other players +$2",
      action: function(game) {
        game.players[game.activePlayer].addHealth(2);
        game.players.forEach(function(player) {
          player.coins += 2;
        });
      }
    }
  ]
}, {
  name: 'Jelonki',
  onfinish: [
    {
      id: 1,
      name: "Get +$3",
      action: function(game) {
        game.players[game.activePlayer].coins += 3;
      },
    },
    {
      id: 2,
      name: "Heal 1 Wound",
      action: function(game) {
        game.players[game.activePlayer].addHealth(1);
      },
    }
  ]
}, {
  name: 'Smolka Forrest',
  onfinish: [
    {
      id: 1,
      name: "Get +$1 for each Defense",
      action: function(game) {
        game.players[game.activePlayer].addHealth(
          game.players[game.activePlayer].getDefense()
        );
      },
    },
    {
      id: 2,
      name: "Get +$3",
      action: function(game) {
        game.players[game.activePlayer].coins += 3;
      },
    },
  ]
}, {
  name: 'E.T. Ylman Sewers',
  onfinish: [
    {
      id: 3,
      name: "Trash Item, get $8",
      action: function(game) {
        if (game.players[game.activePlayer].trashCard('item')) {
          game.players[game.activePlayer].coins += 8;
        }
      },
    },
    {
      id: 1,
      name: "Get +$2",
      action: function(game) {
        game.players[game.activePlayer].coins += 2;
      },
    },
    {
      id: 2,
      name: "Trash Rune, heal 4 Wounds",
      action: function(game) {
        if (game.players[game.activePlayer].trashCard('skill')) {
          game.players[game.activePlayer].addHealth(4);
        }
      },
    },
  ]
}, {
  name: 'Przestrzen Park',
  onfinish: [
    {
      id: 1,
      name: "Everyone heals 1 Wound, you get +$5",
      action: function(game) {
        game.players[game.activePlayer].coins += 5;
        game.players.forEach(function(player) {
          player.addHealth(1);
        });
      }
    },
    {
      id: 2,
      name: "Get +$2",
      action: function(game) {
        game.players[game.activePlayer].coins += 2;
      }
    },
    {
      id: 3,
      name: "Heal 1 Wound, Get +$1",
      action: function(game) {
        game.players[game.activePlayer].coins += 1;
        game.players[game.activePlayer].addHealth(1);
      }
    },
  ]
}];
