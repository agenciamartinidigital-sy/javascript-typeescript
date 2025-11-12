// const nome = 'Luís';
// const sobrenome = 'Martini';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luís';
const sobrenome = 'Martini';


module.exports = {
    nome, sobrenome, Pessoa
}

