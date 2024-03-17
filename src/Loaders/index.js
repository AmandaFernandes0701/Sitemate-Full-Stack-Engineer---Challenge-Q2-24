const startDB = require("./mongodb");

class Loaders {
  start() {
    startDB();
  }
}

module.exports = new Loaders();
