// vetor
// For in lê os índices ou chaves
// const frutas = ['Banana', 'Pêra', 'Maçã', 'Uva'];

// for(let index in frutas){
//     // console.log(i, frutas[i]);
//     console.log(index, frutas[index]);
// }

const pessoa = {
    nome: 'Luís',
    sobrenome: 'Martini',
    idade: 48,
};

for(let key in pessoa){
    // console.log(key, pessoa[key]);
    console.log(`${key}: ${pessoa[key]}`)
}

// const chave = 'nome'
// console.log(pessoa[chave]);

// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// // console.log(pessoa[0]); // undefined
