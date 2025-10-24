// getOwnPropertyDescriptor -> retorna o descritor
//   value: 'qualquer coisa coisa',
//   writable: false,
//   enumerable: true,
//   configurable: false



const produto = {nome: 'Caneca', preco: 1.8};

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
Object.defineProperty(produto, 'nome',  {
    writable: false,
    configurable: false,
    value: 'qualquer coisa coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
delete produto.nome;
console.log(produto);
