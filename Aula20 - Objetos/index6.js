// getter && setter

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar (t) ou não (f)
    configurable: true, // pode reconfigurar
  });
}