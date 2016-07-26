describe('Linter Quality Code', function () {
	describe('ESLint: JavaScript Code Quality Tool', function () {
		var lint = require('mocha-eslint');
		lint('spellbook.js', { "no-nested-ternary" : false });
	});

	describe('JSHint: JavaScript Code Quality Tool', function () {
		require('mocha-jshint')({ paths: [ './spellbook.js' ] });
	});
})
