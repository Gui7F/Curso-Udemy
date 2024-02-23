exports.homePage = (requisition, response) =>{
    response.send(`
    <form action="/" method="post">
      <label for="">Nome:</label>
      <input type="text" name="nome">
      <button>Enviar</button>
  </form>
    `); 
  };

exports.postTrata = (req, res) =>{
    res.send('Formulário Recebido.')
}