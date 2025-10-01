// Arrays aceitam todos os tipos de dados;
// A boa prática é colocar apenas um tipo de dado;
let nomes = ['Luís', 'Martini', 'Jonice'];
nomes = 123;

console.log(typeof nomes); // object
console.log(nomes instanceof Array); // true
// nomes.push('Luísa');
// nomes.push('Eduardo'); // [ 'Luís', 'Martini', 'Jonice', 'Luísa', 'Eduardo' ]
// console.log(nomes.slice(0, 1)) // [ 'Luís' ]
// console.log(nomes.slice(0, 2)) // [ 'Luís', 'Martini' ]
// console.log(nomes.slice(0, 3)) // [ 'Luís', 'Martini', 'Jonice' ]
// console.log(nomes.slice(0, 4)) // [ 'Luís', 'Martini', 'Jonice', 'Luísa' ]
// console.log(nomes.slice(0, 5)) // [ 'Luís', 'Martini', 'Jonice', 'Luísa', 'Eduardo' ]

// console.log(nomes.slice(0, -1)) // [ 'Luís', 'Martini', 'Jonice', 'Luísa' ]
// console.log(nomes.slice(0, -2)) // [ 'Luís', 'Martini', 'Jonice' ]
// console.log(nomes.slice(0, -3)) // [ 'Luís', 'Martini' ]

// delete nomes[1];
// console.log(nomes.length);
// console.log(nomes[50]); // undefined
// console.log(nomes[1]); // undefined

// Métodos que alteram os índices
// nomes.shift(); // retira do início
// console.log(nomes);
// let removido = nomes.pop() // tira do final
// console.log(nomes, removido)



// nomes.unshift('Luísa') // No início
// nomes.unshift('Fábio') // No início
// Método .push() -> adiciona no fim!
// Método .
// nomes[nomes.length] = 'Luísa' // adiciona no fim

// nome[0] = 'Eduardinho';
// nome[2] = 'Amoedinho';
// nome.push('Adelinha'); 

// console.log(nome);
// console.log(nome.length);

// console.log(nome);
// console.log(nome[0]); // Acessando
// console.log(nome[1][0]);

