SMOKI
2 razy więcej ran 
// zdjecie => Twoje rany x2
// zdjecie => ich rany x3
zdjecie => Ty = 3$ inni = x-2$
zdjecie => -2 potwory inni -1 potwory

POTWORY
2 razy wiecej ran
zdjecie => -2$ => wskazany
zdjecie => +3$ Ty inni -1$
trash => +2 atak
zdjecie => -3 rany
zdjecie => +1 rana wskazany
zdjecie => +2 rany wszyscy
zdjecie => -1 potwor Ty i wskazany

ITEM
end turn => trash => +11$
zdjecie => inni gracze rany 1/2x(twoj atak)
$ => 3 obrony 
trash => 7$
$ => 3 ataki
zdjecie czaru => +4$
zdjecie => move to other player //potem// 5$ => go to the bottom of the stack
x$ => x deffens
end turn => rana -1
2$ => 2 ataki
end turn => +5$
zdjecie => wskazany gracz -1 potwor
trash potwor => 7$
zdjecie potwora => +1$

ZAKLECIA
2$ => x deffens => +x atak
trash => 5deffens
start turn => +1$
end turn => wskazany -2$
trash => +5 atak if dragon
zdjecie => 6 ran
zdjecie potwor => rany -1
end turn => wskazany gracz -1 rana => tobie -2 rany
$ => +1 atak +1 deffens
zdjecie => wskazany trash top magic card 
start turn => -1 rana
trash potwor => +5atak
2$ => 1/2(count potwor) atak

KARTY WIOSEK
 MULTI
  x$ => y*atak
 SINGLE
  end turn => 3$
  end turn => -1 ran
  end turn && 2$ => +(count potwory)$
  end turn && trash item => +8$
  wskazany gracz -1 ran => +1 atak Tobie
  end turn && trash magic => -4 rany
  end turn => +5$ && inni gracze -1
  end turn => -2 rany && wskazany gracz +4$
  end turn => -1 ran
  dragons mają +1 atak + 1hp
  end turn => +(count obrona)$
  wszystkie smoki i potwory +2hp
  end turn && trash monster => gain magic || item from trash stack
  end turn => -2 rany && others -1 ran
  start turn => +1$