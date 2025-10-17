// // Uso de arguments que sustenta todos os argumentos enviados
// function funcao(){
//     let total = 0;
//     for(argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function soma1(){
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     console.log(total);
// }
// soma1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao1(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);
// }
// funcao1(1, 2, 3); // 1 2 3 undefined undefined undefined

// function sum(a=0, b=2, c=4){
//     // b = b || 0;
//     // a = a || 0;
//     console.log(a + b + c);
// }
// sum(2, undefined, 20); // Null não vai funcionar

// // const sum1 = (a, b) => a + b;
// // console.log(sum1(2, 3))

// // const sum2 = (...args) => args.reduce((ac, v) => ac + v);
// // console.log(sum2(1, 2, 3, 4, 5, 6));

// // Atribuição via desestruturação

// function funcao2({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// funcao2({nome: 'Luís', sobrenome: 'Martini', idade: 48});

// function funcao3([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3)
// }
// funcao3(['Luís', 'Martini', 48]);

// const conta = function(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     } 
//     console.log(acumulador)
// }
// conta('+', 1, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) {
//     console.log(operador, acumulador, numeros);
// };
// conta('+', 1, 20, 30, 40, 50);


// rest operator funciona em todas as funções
const conta = (...args) => {
    console.log(args)
}
conta('+', 1, 20, 30, 40, 50)