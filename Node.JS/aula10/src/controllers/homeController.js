exports.homePage = (req,res) =>{
  res.render('index');
  };

exports.postTrata = (req, res) =>{
    res.send('Formulário Recebido.')
}