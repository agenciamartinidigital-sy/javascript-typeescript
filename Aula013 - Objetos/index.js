// function criaPessoa(nome, sobrenome, idade){ // função factory
//     return {
//         nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Luís', 'Martini', 48);
// const pessoa2 = criaPessoa('Jonice', 'Martini', 48);
// const pessoa3 = criaPessoa('Adele', 'Martini', 48);
// const pessoa4 = criaPessoa('Anna', 'Martini', 48);
// const pessoa5 = criaPessoa('Carol', 'Martini', 48);
// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// console.log(pessoa4);
// console.log(pessoa5);

const pessoa1 = {
    nome: 'Luís',
    sobrenome: 'Martini',
    idade: 48,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando "oi"...`); // this representa, neste contexto, o objeto pessoa1
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();