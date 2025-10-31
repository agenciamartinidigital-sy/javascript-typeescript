// Flags g = Global (encontra todas as ocorrências)
// Flag i = insensitive (não checa as letras maiúsculas)
// () grupos
// | ou
// exec e test

const {texto} = require('./base')
const regExp1 = /joão/ig;
const found = regExp1.exec(texto);

// const text = ['João está feliz para ir para casa. João quer ir para o cinema.']

// console.log(regExp1.test(texto));
console.log(found.exec(texto));

// if(found) {
//     console.log(found[1]);
//     console.log(found[2]);

// }

// Test testa se há ou não