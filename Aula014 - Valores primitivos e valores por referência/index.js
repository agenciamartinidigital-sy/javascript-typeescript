// Valores primitivos e valores por referência
/**
 * Primitivos -(imutáveis) string, number, boolean, undefined, null, bigInt e symbol
 * Valor do dado
 * Strings são indexadas 
 */

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
