exports.middlewareGlobal = (req, res, next) =>{
    console.log('test')
    if(req.body.cliente === 'luffy'){
        req.body.cliente = req.body.cliente.replace("luffy", 'rei dos piratas')
    }
    next();
}

// middlewares nada mais são que funções que executam junto das funções de controle, serve para intercepitar qualque tipo de requisão do cliente
// pois pode ser passados nas routes assim como controllers, pode como neste exemplo que criei trocar uma informação inserida pelo cliente por outra
// enfim o poder de contrução com middlewares é claramente gigantesco. 

// Uma função midddleware recebe tres parametros, req, res e next, tanto controllers como middlewares podem receber o next como terceiro parametro, 
// ele serve para indicar qual proxima função a ser executada na route, isso siginifica que alem de poder intercepitar podemos mostra a ordem,
// o next(), no caso dos middlewares são obrigatórios porque se não a requisão nunca é lida, fica carrengado infinito 