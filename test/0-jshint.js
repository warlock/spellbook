describe('JShint Syntax test', function () {
	require('mocha-jshint')({
		paths: [
		'./spellbook.js'
		]
	});
});