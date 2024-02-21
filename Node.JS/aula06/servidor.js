// Nesta atualização estamos aprendendo a como utilizar a ferramenta Nodemon 
// Ela serve para o desenvolvimento por isso deve ser salva nas devDependencies 
// Ela atuliza o servidor a cada alteração no codigo oque facilita a produção


// Comando de instalação : npm install nodemon --save-dev
// Comando de execução : npx nodemon nomeArquivo.js
// Tambem podemos salva o comando no package.json  com chave "start": "nodemon nomeArquivo.js"
// ai no terminal utiliza apenas npm start e pronto da certo tambem.
 
const express = require('express');
const app = express();


app.get('/', (requisition, response) =>{
  response.send(`
  <form action="/" method="post">
    <label for="">Nome:</label>
    <input type="text" name="nome">
    <button>Enviar Formulário</button>
</form>
  `); 
});

app.post('/' , (req, res) => {
    res.send('Recebi o formulário')
});

app.get('/contato', (requisition, response) => {
    response.send('Obrigado por entrar em contato.')
})


app.listen(3000, () =>{

    console.log('Servidor executando na porta 3000');
});
