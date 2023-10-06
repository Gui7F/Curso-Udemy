// Agora vamos fala um pouco do bloco finally que serve para você coloca um bloco
// que sempre sera executado ele serve para  colocar um codigo padrao que sempre sera 
// executado dando erro ou nao

try{
    console.log ('abri um arquivo')
    console.log(arquivoCorrompido)
}catch(error){
    const a = 'arquivo corrigido'
     console.log(a)
}finally{
    console.log('arquivo fechado')
}

// Ou seja o erro ocorrendo ou nao o arquivo sempre sera fechado pelo bloco de codigo
// finally

// Vamos para outro exemplo vamos montar uma fuction que retorna a hora atual 

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date')
    }

    if (!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit' ,
        second: '2-digit',
        hour12: false
    })


}

retornaHora()

try{
    const hora = retornaHora(122)// Vou lança algum valor aqui para causa o erro 
    console.log(hora)

}catch(error){
    
   console.log(error)
   
}finally{

   
    console.log('Tenha um Bom dia' )
}



