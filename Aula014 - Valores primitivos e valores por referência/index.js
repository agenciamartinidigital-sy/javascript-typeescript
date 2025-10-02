// Valores primitivos e valores por referência
/**
 * Primitivos -(imutáveis) string, number, boolean, undefined, null, bigInt e symbol
 * Valor do dado
 * Strings são indexadas
 * tipo de valor passado por referência (mutável) - Arrays, Object, function
 */

// let a = [1, 2, 3];
// let b = [...a]; // aponta para o mesmo lugar na memória // spread de "a"
// let c = b;
// console.log(a, b, c);

// a.push(4);
// console.log(a, b, c);

// b.pop();
// console.log(a, b, c)

// a.push('Luís')
// console.log(a, b, c)

// let a = 'A';
// let b = a; // cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

const a = {
    nome: 'Luís',
    sobrenome: 'Martini'
};
// const b = {...a}; // Valores independentes!
const b = a; // Valores independentes!

a.nome = 'João'
console.log(a, b);
