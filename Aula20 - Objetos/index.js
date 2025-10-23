// Objeto literal
// chave: 'valor',
// const pessoa = {
//     nome: 'Luís',
//     sobrenome: 'Martini'
// };

// const chave = 'nome';
// console.log(pessoa[chave])

// Construtor
// new Object(); 

const pessoa1 = new Object();
pessoa1.nome = 'Luís';
pessoa1.sobrenome = 'Martini';
pessoa1.idade = 48;

pessoa1.falarNome = function(){
    return (`${this.nome} ${this.sobrenome} está falando sua data de nascimento ${this.getDataNascimento()}`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

// console.log(pessoa1.getDataNascimento());


// delete pessoa1.nome;


// É preferível usar o literal
// Podemos executar métodos