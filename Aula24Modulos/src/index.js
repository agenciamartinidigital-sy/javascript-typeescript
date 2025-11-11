// import {nome, sobrenome, idade, soma} from './modulo1.js';
import multiplica, {nome, sobrenome, idade, soma, Pessoa} from './modulo1.js'

console.log(nome, sobrenome, idade);
console.log(soma(5, 40));
console.log(multiplica(5, 40));

const p1 = new Pessoa('Luís', 'Martorano')
console.log(p1);