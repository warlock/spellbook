/*eslint global-require: 0*/
/*global require describe */
const lint = require('mocha-eslint')

describe('Linter Quality Code', () => {
  describe('ESLint: JavaScript Code Quality Tool', () => {
    lint('./src/*', {"no-nested-ternary": false})
  })
})
