// Função construtura -> objetos
// Função fábrica -> objetos = criaPessoa
// Construtora -> inicia com letra Maiúscula Pessoa (new)
// criar atributos privados


function Pessoa(nome, sobrenome){
    // o corpo é o objeto

    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function (){

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => console.log(`${this.nome}: sou um método`);
}

const p1 = new Pessoa('Luís', 'Martini'); // molde
p1.metodo();
const p2 = new Pessoa('Jonice', 'Martini');
// new cria um objeto vazio, faz o this apontar para o objeto vazio.
p2.metodo();