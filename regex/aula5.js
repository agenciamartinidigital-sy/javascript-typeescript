const {alfabeto} = require('./base');

// [] -> criando um conjunto 
// ^ nega -> não
// [min-maxQualquercoisa] range [0-9]
// [^min-maxQualquercoisa] range [0-9]


console.log(alfabeto);
// console.log(alfabeto.match(/[abc123]+/g));
// console.log(alfabeto.match(/[^abc123]/g));
// console.log(alfabeto.match(/[0-9]+/g));
// console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
// console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // negação
// console.log(alfabeto.match(/[a-zA-Z0-9çã]+/g));
// console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); 
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g)); // negação
console.log(alfabeto.match(/\d+/g)); // digito
console.log(alfabeto.match(/\D/g)); // negar os digito
console.log(alfabeto.match(/\D+/g)); // negar os digito
console.log(alfabeto.match(/\s+/g)); // espaços
console.log(alfabeto.match(/\S+/g)); // espaços
