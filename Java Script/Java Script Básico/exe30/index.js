function timer (second){
    const data = new Date(second * 1000 ); // JavaScript passa milisegundo por *1000

    return data.toLocaleTimeString('pt-br',
    {hour12:false,
     timeZone:'GMT'
    });
}


const relogio = document.querySelector('#relogio');
let segundos = 0 
let Timer;


function iniciaTimer (){
    Timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = timer(segundos)
    },1000)
}

document.addEventListener('click' , function(event){
    const element = event.target 

    if(element.classList.contains('buttonI')){
        clearInterval(Timer)
        iniciaTimer()
    }

    if (element.classList.contains('buttonP')){
        clearInterval(Timer)
    }
   
    if(element.classList.contains('buttonZ')){
        clearInterval(Timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})

