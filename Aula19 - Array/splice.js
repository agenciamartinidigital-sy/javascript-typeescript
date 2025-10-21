const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// const removidos = nomes.splice(3, 2, 'Luís', 'Martini');

// Simular o .pop()
// const removidos = nomes.splice(-1, 1);

// Simular o shift - remove o primeiro
// const removidos = nomes.splice(0, 1);

// push - add no final
// nomes.splice(nomes.length, 0, 'Luís');

// unshift - add no início
nomes.splice(0, 0, 'Luís', 'Jonice');

console.log(nomes);
// nomes.splice(indice atual, delete qtd, add);
