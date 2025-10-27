// Classes, a classe é a mesma coisa da função construtora

// Molde de criação
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando...`)
}

const p1 = new Pessoa('Luís', 'Martini');
const p2 = new Pessoa2('Jonice', 'Martini');

console.log(p1);
console.log(p2);
