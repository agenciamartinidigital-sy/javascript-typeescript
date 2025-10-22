// Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> dobrar os valores
// -> somar tudo

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.filter(n => n % 2 === 0).map(n => n * 2).reduce((ac, v) => ac + v);
console.log(total)

// [ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]
// 324