// // const nome = 'Luís Martini';
// const nomes = ['Luís', 'Martini']

// console.log('######');
// for (let i = 0; i < nomes.length; i++){
//     console.log(i, nomes[i]);
// }
// console.log('######');
// for(let i in nomes){
//     console.log(nomes[i]);
// }

// console.log('######');
// for (let i of nomes) {
//     console.log(i);
// }

// console.log('###111###');
// // nomes.forEach(function (valor, indice, array){
// //     console.log(indice, valor, array)
// // })

// nomes.forEach((el, i) => console.log(i, el));

const pessoa = {
    nome: 'Luís',
    sobrenome: 'Martini'
};

// for(let i in pessoa){
//     console.log(i, pessoa[i])
// }

// for (let valor of pessoa){
//     console.log(valor);
// }


// For Clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chaves (string, array ou objetos)
// For of - retorna o valor em si (iteráveis, array ou strings)