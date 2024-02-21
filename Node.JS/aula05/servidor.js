const express = require('express');
const app = express();

// Vamos aprender o basico sobre o express neste modulo do curso, começando pelo metodo GET

// Um servidor basico deve ser capaz de realizar operações de CRUD, o metodo get é o READ do CRUD

// Vamos aprender como este framework backend pode facilitar nestas operações de interação do servidor com cliente

// CRUD =          Create Read  Uptade Delete
// Verbos Http =   Post   Get   Put    Delete 


app.get('/', (requisition, response) =>{
  response.send(`
  <form action="/" method="post">
    <label for="">Nome:</label>
    <input type="text" name="nome">
    <button>Enviar</button>
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

// Ou seja podemos criar as funções de CRUD bem rapido com express para ser sincero nunca criei de outra forma 
// porem achei bem simples de entender esse começo. 