/**
 * Operadores lógicos
 * && -> AND -> todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> apenas uma precisa ser verdadeira para retornar true
 * ! -> NOT
 */

// Quando duas condições precisam ser satisfeitas, usa-se o &&
// Quando uma das condições são satisfeiras, usa-se ||

// const expressaoAND = true && true && true && true;
// const expressaoOr = true || false;
// console.log(expressaoAND);
// console.log(expressaoOr);

const usuario = 'Luís';
const senha = '123456';

const vaiLogar = usuario === 'Luís' && senha === '123456';
console.log(vaiLogar);
console.log(false);

