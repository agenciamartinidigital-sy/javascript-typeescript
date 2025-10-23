function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // não consigo alterar e/ou criar nada;
}


// new cria um objeto vazio {} <- this atrela dentro do objeto
// this -> varia
// this é o {}

const p1 = new Pessoa('Luís', 'Martini');
p1.nome = 'Kiko';
delete p1.nome;
const p2 = new Pessoa('Jonice', 'Martini');
console.log(p1);
console.log(p2);

