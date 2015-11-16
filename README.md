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

Domain extractor:

sp.getDomain("http://www.dondominio.com");

