const pessoas = [
    {id: 3, nome: 'Luís'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,  { ...pessoa });
}
// console.log(novasPessoas.get(2));
// for(const [ident, {id, nome}] of novasPessoas){
//     console.log(ident, id, nome);
// }

// for(const pessoa of novasPessoas.values()){
//     console.log(pessoa);
// }

// novasPessoas.delete(2)
console.log(novasPessoas);
