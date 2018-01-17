
I am excited to train AI against the same AI. [Similar to Google's AlphaZero.](https://deepmind.com/blog/alphago-zero-learning-scratch)

Things to do first before making AI
* good public api
* basic working game and UI
* possibly some kind of move notation [Chess notation for example](https://en.wikipedia.org/wiki/Chess_notation#Notation_systems_for_humans)
  * its already a thing! http://pentolla.com/beginner/
  * http://lut.eee.u-ryukyu.ac.jp/dc14/
* replay system or gif maker using the move notation

What information is needed for each turn?
* the board (should it be the pieces and colors or a matrix of cells and a color?)
* each person's remaining pieces
  * include number of tile counts?
* turn rotation?
  * (would that matter to anyone? humans get to see the rotation!) 
  * exclude people who have given up?
* whose turn?


should highlight each players most recent move.

LATE NIGHT iDEA:
 if we want to highlight each player's last move we should use letters to represent occupied cells.
 Capital letters for the newest piece.
 Lower for the other pieces.
 Or the other way around.

 I want letters that the capital and lowercase versions look visual similar but different enough to be idenified in isolation
 as either lowercase or uppercase. if you were to look at x in isolation, not comparing the height to other letters. I would struggle to know.

 the following is very subjective.
 We should pick letters that look similar capital and lower like K and k 
 A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
 a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z
 
 letters that look similar lower and capitalized are below.
 Cc
 Ff
 Kk
 Ll
 Mm
 Oo
 Pp
 Ss
 Uu
 Vv
 Ww
 Xx
 Yy
 Zz
 
 should exclude 'o' and 'l' because they look like zero and one.
 Cc
 Ff
 Kk
 Mm
 Pp
 Ss
 Uu
 Vv
 Ww
 Xx
 Yy
 Zz
 
 should exclude letters that differentiate lower and caps by hanging under the line like 'p' and 'y'
 When looking at a bunch of letters on a grid it might make it harder.
 Cc
 Ff
 Kk
 Mm
 Ss
 Uu
 Vv
 Ww
 Xx
 Zz
 
 we could choose the letters 'f' 'u' 'c' and 'k' LOL.
 The chosen letters shouldn't spell anything inappropriate.


remove one of the close similar letters.
  W and M remove W
  S and Z remove Z
  V and U remove V

 Cc
 Ff
 Kk
 Mm
 Ss
 Uu
 Xx
 

possibly the four:
Ff
Mm
Uu
Kk


polish idea:
on mouse hover of piece it enlarges
