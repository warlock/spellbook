var path = require('path');

module.exports = {
  "entry": "./src/main.js",
  "output": {
    "path": path.resolve("./"),
    "library": "sb",
    "filename": "spellbook.js",
    "libraryTarget": "umd"
  }
};
