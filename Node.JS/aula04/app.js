const path = require ('path')

const caminhoARQ = path.resolve(__dirname,'test.json'); 

const escreve = require('./modules/escreve')

const lerArquivo = require('./modules/ler')

const mugiwaras = [
    {nome:'Luffy'},
    {nome:'Nami'},
    {nome:'Zoro'},
    {nome:'Sanji'},
]

const json = JSON.stringify(mugiwaras, '', 2);

escreve(caminhoARQ, json)

async function recebeArquivo(caminho) {
    const dados = await lerArquivo(caminho); 
    rendArquivo(dados)
}

function rendArquivo(dados){
 const dado = JSON.parse(dados);
 dado.forEach(valor => console.log(valor.nome)) 
}

recebeArquivo(caminhoARQ)