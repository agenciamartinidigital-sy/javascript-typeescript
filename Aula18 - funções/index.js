// Declaração de função (function hoisting)

function falaOi(){
    console.log('Oie');
}


// First-class object (Objetos de primeira classe)
// expressão de função / function expression

// const souUmDado = function(){
//     console.log('Sou um dado!');
// };
// souUmDado();

const souUmDado = function(){
    console.log('Sou um dado!');
};


// function executaFuncao(funcao){
//     console.log('Vou executar sua função abaixo: ');
//     funcao();
// }
// executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma function!')
};




// Dentro de um objeto
// const obj = {
//     falar: function() {
//         console.log('Estou falando...')
//     }
// }
// obj.falar(); //notação de ponto

const obj = {
    falar() {
        console.log('Estou falando...')
    }
}

falaOi();       // roda de novo
souUmDado();    // roda de novo
funcaoArrow();  // roda de novo
obj.falar();    // roda de novo
