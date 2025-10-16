// Capturar o evento de submit do formulário.
// addEventListener(param1, função){}

const form = document.querySelector('#form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido!', false);
        return; 
    }

    if(!altura) {
        setResultado('Altura inválida!', false);
        return;
    }
    
    // Deve ser feito no evento de submit
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    console.log(nivelImc);
    
    const msg = `Seu IMC é ${imc}: (${nivelImc}).`;
    setResultado(msg, true);
    
    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade I', 'Obesidade II', 'Obesidade III'];

    if (imc >= 39.9) {
        return nivel[5] 
    } 
    if (imc >= 34.9) {
        return nivel[4] 
    } 
    if (imc >= 29.9) {
        return nivel[3] 
    } 
    if (imc >= 24.9) {
        return nivel[2] 
    } 
    if (imc >= 18.5) {
        return nivel[1] 
    } 
    if (imc < 18.5){
        return nivel[0] 
    }
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');

    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}

function criaP(){
    // Criar um elemento em javascript
    const p = document.createElement('p');
    // // classList.add
    return p;
}

