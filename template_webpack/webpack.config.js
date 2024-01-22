const path = require('path'); // CommonJS é o sistema de modules do Node
module.exports ={
    mode: 'production', // Aqui estamos mostrando modo que estamos trabalhando, em production estamos codando em devolpment estamos parados
    entry:'./src/index.js', // Aqui estamos mostrando o caminho de entrada do script pro webpack
    output:{                    
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // Esse objeto é o caminho que vamos manda a saida do
        filename: 'bundle.js'                                   // script pros navegadores dos clients 
    },
    module:{  // Aqui estamos criando as regras de leitura do webpack
        rules:[{
            exclude: /node_modules/, // Aqui nos excluimos da leitura do webpack a pasta do node modules pq é desnecessario ele fica lendo ela
            test: /\.js$/, // Aqui estamos indicando a extensão do arquivo que ele deve ler
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map' // Aqui estamos criando um mapa, para linkar erros que acontece no arquivo bundle ao js original
} 