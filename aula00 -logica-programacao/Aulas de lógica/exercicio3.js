/**
 * Escreva uma função que recebe um número
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número não é divisível por 3 e 5 = retorna o próprio número
 * Checar se o número é realmente um número
 * Usar com números de 0 a 100
 */

// function fizzBuzz(numero){
//     // numero = Number(numero)
//     if(!NaN){
//         return `${numero} não é um número`;
//     }
//     if (numero % 3 === 0 && numero % 5 === 0){
//         return 'FizzBuzz';
//     } else if(numero % 3 === 0){
//         return 'Fizz';
//     } else if(numero % 5 === 0){
//         return 'Buzz';
//     } else {
//         return numero;
//     }
// }
// console.log(fizzBuzz('abc'));

function fizzBuzz(numero){
    if (typeof numero !== 'number') return `${numero}`; // return NaN
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log( i, fizzBuzz(i) );
}

