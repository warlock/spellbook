module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [2, "single"],
    'comma-dangle': ["error", "never"],
    'linebreak-style': [
      "error",
      "unix"
    ],
    quotes: [
      "off"
    ],
    semi: [
      "error",
      "never"
    ],
    'no-console': [
      "off"
	    ],
    'no-restricted-imports': [0]
  }
}