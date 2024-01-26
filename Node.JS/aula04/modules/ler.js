const fileSystem = require('fs').promises
module.exports = (caminho) => fileSystem.readFile (caminho, 'utf-8')