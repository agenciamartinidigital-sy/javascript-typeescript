const pessoa = {
    nome: 'Luís',
    sobrenome: 'Martini',
    idade: 48,
    endereco: {
        rua: 'Av. Brasil',
        numero: 2216
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa

// Usando rest

console.log( nome, sobrenome, resto );


