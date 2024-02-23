const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

// Nesta linha estamos usando o tratamento para post, falta estudar melhor oque exatamente esta linha faz
app.use(express.urlencoded({extended: true}));
// Nesta linha estamos usando o tratamento para post, falta estudar melhor oque exatamente esta linha faz

app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs');

app.use(routes)

app.listen(3000, () =>{

    console.log('Servidor executando na porta 3000');
});

// Resumo: 
//req.query => https://exemplosite.com/?chave1=valor&chave2=valor....
// req.params => https://exemplosite.com/iduser/user1
// req.body => app.post tem que ser post porque vamos criar algum arquivo com este parametro 