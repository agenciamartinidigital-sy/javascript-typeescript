// SetInterval e setTimeOut

function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

function interval(){
    console.log(mostrarHora())
}

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer)
}, 3000);

setTimeout(function(){
    console.log('Olá, mundo!');
    
}, 5000);


