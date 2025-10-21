// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const pessoas = [
    {nome: 'Luís', idade: 48},
    {nome: 'Jonice', idade: 58},
    {nome: 'Eduarda', idade: 37},
    {nome: 'Marcos', idade: 40},
    {nome: 'Adele', idade: 75},
    {nome: 'Wallace', idade: 49},
];

// // Retorne as pessoas que tem o nome com 5 letras ou mais

// const pessoasNomeGrande = pessoas.filter(function(objeto){
//     return objeto.nome.length >= 5
// });

// const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length > 5);

// console.log(pessoasNomeGrande)

// // Retornar pessoas com mais de 50 anos

// const pessoas50anos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoas50anos);

// // Retornar as pessoas cujo nome termina com a

const letraA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a')
})
console.log(letraA)