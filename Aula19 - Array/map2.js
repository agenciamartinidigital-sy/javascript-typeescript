/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas as chaves "nome" do objeto
 * Adicione uma chave id em cada objeto
 */

const pessoas = [
    {nome: 'Luís', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// const idades = pessoas.map(obj => obj.idade);
// console.log(idades);

// const comIds = pessoas.map((obj, index) => obj.id = index);
// console.log(pessoas)

const comIds1 = pessoas.map(function(obj, index) {
    const newObj = { ...obj };
    newObj.id = index;
    return newObj;
});
console.log(pessoas);
// console.log(comIds1);