// Capturar o evento de submit do formulário.
// addEventListener(param1, função){}
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    console.log(inputPeso);
    console.log(inputAltura);
});

function criaP(){
    // document.createElement('p')
    const p = document.createElement('p');
    // adicionar uma classe na lista de classes
    return p;
}

function setResultado(){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
}
