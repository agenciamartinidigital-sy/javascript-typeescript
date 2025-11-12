// const {nome, sobrenome, falaNome} = require('./mod1')
// console.log(nome, sobrenome);

const mod1 = require('./mod1');
// const { Pessoa } = require('./mod1');

const p1 = new mod1.Pessoa('Luís');
console.log(p1);

console.log(mod1.nome);
console.log(mod1.sobrenome);

