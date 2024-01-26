const fileSystem = require('fs') // Aqui vamos requerir do node_modules uma função que le arquivo editar faz muita coisa com ela 
const caminho = require('path')

async function readdir(raizDir){
    raizDir = raizDir || path.resolve(__dirname); // Aqui estamos dizendo ou pra usar a raiz caso não consiga utilzar o path pra resolver o caminho
    const arquivo = await fileSystem.readdir(raizDir); 
    WakeLock(arquivo, raizDir)
}

async function walk(files, raizDir){
    for (let file of files){
        const fileFullPath = path.resolve(raizDir, file);
        const stats = await fileSystem.stat(fileFullPath)


        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        } 
        console.log(fileFullPath)

    }
}

readdir('caminhotest')

//Uma função utilizando o FileSystem do node para pesquisar aquivos, serve como acesso para os arquivos 