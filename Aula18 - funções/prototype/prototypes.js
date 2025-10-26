/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo uisado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depos a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

Object.prototype é o pai!
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa. prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

// Instâncias
const pessoa1 = new Pessoa('Luís', 'M.');
const pessoa2 = new Pessoa('Jonice', 'M.');
const data = new Date(); // <- Date = função construtora

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
console.dir(data)