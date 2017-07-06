/*eslint global-require: 0*/
/*global require describe */

describe('Linter Quality Code', function () {
  if (process.versions.node.split('.')[0]>3) {
    describe('ESLint: JavaScript Code Quality Tool', function () {
      var lint = require('mocha-eslint');
      lint('./src/*', {"no-nested-ternary": false});
    });
  }

  describe('JSHint: JavaScript Code Quality Tool', function () {
    require('mocha-jshint')({"paths": ['./src/']});
  });
});