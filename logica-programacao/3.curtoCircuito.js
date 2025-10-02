/**
 * &&
 * || 
 */

/**
 * Avaliação em false
 * false
 * falsy values - fingem ser falsos
 * 0
 * "" / ''
 * null
 * undefined
 * NaN
 */

//console.log('Luís' && true && NaN); // retorna o valor falso

// console.log('Luís' && 'Maria'); // retorna o último valor
// console.log('Luís' && undefined && 'Maria'); // retorna o último valor falso

// function falaOi(){
//     return 'Oi';
// }

// let vaiExecutar = 'Joãozinho';
// console.log(vaiExecutar &&| falaOi()); // false

// console.log(0 || false || null || 'Luís Martini' || true); // 'Luís Martini'

// const corUsuario = 'red';
// const corPadrao = corUsuario || 'Preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // 
const d = false;
const e = NaN;

console.log(a || b || c || d || e)