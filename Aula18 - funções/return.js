// return 
// retorn um valor
// termina a função 

// const cores = ['red', 'blue', 'purple', 'grey', 'pink'];
// let index = 0;

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = cores[index];
//     index = (index + 1) % cores.length;
// })

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Luís', 'Martini');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Olivais'
// }
// console.log(typeof p1);
// console.log(typeof p2)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + " " + resto
//     }
//     return falaResto;
// }
// // console.log('Olá', 'Mundo')
// // const OlaMundo = falaFrase('Olá'); // OlaMundo é função
// // console.log(OlaMundo('Mundo!'));
// const fala = falaFrase('Olá');
// const resto = fala('mundo!')

// console.log(resto)

function criaMultiplicador(mult){
    // multiplicador
    return function (n){
        return n * mult;
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
const quinto = criaMultiplicador(5)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
console.log(quinto(2))