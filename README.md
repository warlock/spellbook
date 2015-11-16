# SpellBook
Warning: Development version.

Import module:

var sp = require("spellbook");


CLASS EXTENSION:

Array.deleteOf('element');


var list = ['a', 'b', 'c'];

list.deleteOf('b');

-> ['a', 'c']


Array.clear();

var list = ['a', 'b', 'c'];

list.clear();

-> []

TOOLS:

Range:

sb.range(0,10);

-> [0,1,2,3,4,5,6,7,8,9,10]

sb.range(-100,100,20);

-> [-100,-80,-60,-40,-20,0,20,40,60,80,100]

sb.range('A','F');

-> ['A','B','C','D','E','F')

sb.range('m','r');

-> ['m','n','o','p','q','r']


Domain extractor:

sp.getDomain("http://www.dondominio.com");

