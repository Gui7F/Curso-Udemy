const express = require('express')
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contato = require("./src/controllers/contatoController")

//Aqui estamos criando as rotas em um arquivo js separado, questão de organizção da aplicação
route.get('/', homeController.homePage);

// Pelo oque entendi o express pode utilizar Route() para administras as rotas para o servidor
// ela pode ter qualquer verbo http, e estamos utilizando o padrão MVC full no caso oque eu nao entendi muito bem
// porem entendi que cada rota ter um controllers so nao entendi onde entra o model e o view 

route.post ('/', homeController.postTrata);

route.get('/contato', contato.contatoDados);

module.exports = route