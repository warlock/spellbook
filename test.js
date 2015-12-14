var sb = require("./spellbook");
var objecte = new Date();
var hola = ['1', 2, 3, 4, 5, objecte];
console.log(hola);
console.log(hola.remove(['1',2, 4, objecte]));
console.log(hola.remove('1'));
