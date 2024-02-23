const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');


app.use(express.urlencoded({extended: true}));


//Aqui estamos criando um caminho de acesso para o servidor ao conteudo estático da page
// conteudos estáticos são logos, bundles webpack, o proprio html e entre outros arquivos. 
app.use(express.static(path.resolve(__dirname, 'public')));

//__dirname é o nome que faz referencia a pasta onde este arquivo esta, ou seja __dirname neste caso
// siginifica aula10. 

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