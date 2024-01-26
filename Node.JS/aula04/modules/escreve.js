const fs = require ('fs').promises

module.exports = function escreve (caminhoARQ, json ){
    fs.writeFile(caminhoARQ, json , {flag:'w'})
}
