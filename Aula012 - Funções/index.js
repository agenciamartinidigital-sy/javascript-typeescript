// Trecho de código reutilizável

// function saudacao(nome){
//     // console.log(`Bom dia, ${nome}`); 
//     return `Bom dia, ${nome}`;
// }

// const variavel = saudacao('Luís');
// console.log(variavel);

// function soma(x=1, y=1) {
//     const resultado = x + y;
//     return resultado; // encerra a função, não leia nada abaixo
//     // console.log('Olá, mundo!'); // não lê
// }
// const resultado = soma(4, 2); // NaN
// console.log(resultado);

// // soma(2, 2);
// // console.log(resultado);
// // console.log(soma(2, 2));
// // console.log(soma(3, 1));
// // console.log(soma(5, 10));

// Função anônima
// const raiz = function(n) {
//     return n ** 0.5;
// };
// console.log(raiz(4));
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// Arrow function
// this
const raiz = n => console.log(n ** 0.5); // forma elegante
const raiz1 = n => n ** 0.5; // forma elegante

raiz(100);
console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));