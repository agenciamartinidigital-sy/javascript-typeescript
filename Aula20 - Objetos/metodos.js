/**
 * Object.value
 * Object.entries
 * Objecto.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread operator)
 */
// ... copiar/clonar
// ... spread é mais intuitiivo

const produto = {nome: 'Caneca', preco: 1.8};
const caneca = { 
    ...produto, 
    material: 'porcelana',
};

// const caneca = Object.assign({}, produto, {material: 'Porcelanato'});
// const caneca = { nome: produto.nome, preco: produto.preco };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
console.log(produto);

console.log(caneca);