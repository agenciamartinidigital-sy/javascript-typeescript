// Camiseta = cor, caneca=material
// Produto é a abstração -> aumento e desconto

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(Produto, cor){
    this.Produto = Produto;
    this.cor = cor;
}
// Camiseta.prototype = Object.create(Produto.prototype);
// Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

console.log(produto);
console.log(camiseta);