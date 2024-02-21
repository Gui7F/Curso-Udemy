const express = require('express');
const app = express();


// Nesta linha estamos usando o tratamento para post, falta estudar melhor oque exatamente esta linha faz
app.use(express.urlencoded({extended: true}));
// Nesta linha estamos usando o tratamento para post, falta estudar melhor oque exatamente esta linha faz


app.get('/', (requisition, response) =>{
  response.send(`
  <form action="/" method="post">
    <label for="">Nome:</label>
    <input type="text" name="nome">
    <button>Enviar</button>
</form>
  `); 
});

// Esta é a forma como acessamos parametro na url do site
// podemos colocar parametro staticos ou obrigátorios para acessar 
// no caso é so adicionar o '?' que vai ser um parametro opcional de pesquisa
// sem ele o parametro idUser é obrigatório para acessar a rota /test


app.get('/test/:idUser?/:parametro?', (req, res) =>{
  res.send(req.params);
  res.send(req.query.exemplo)
})


// Aqui estamos recebendo parametros de requisição que vem no corpo do arquivo neste caso um formulario
// quando response envia o ${req.body.nome} é referente ao input que o get esta enviado la em cima que tem name ="nome"


app.post('/' , (req, res) => {
    res.send(`Arquivo Recebido: ${req.body.nome}`)
});


app.listen(3000, () =>{

    console.log('Servidor executando na porta 3000');
});

// Resumo: 
//req.query => https://exemplosite.com/?chave1=valor&chave2=valor....
// req.params => https://exemplosite.com/iduser/user1
// req.body => app.post tem que ser post porque vamos criar algum arquivo com este parametro 