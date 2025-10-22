const pessoas = [
    {nome: 'Luís', idade: 62}, 
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 82},
    {nome: 'Wallace', idade: 47},
];
// Retorne a pessoa mais velha



const maisVelha = pessoas.reduce((ac, v) => ac.idade > v.idade ? ac : v );
console.log(maisVelha);

