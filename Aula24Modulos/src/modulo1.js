export {nome, sobrenome, idade, soma, Pessoa};
/*export */const nome = 'Luís';
const sobrenome = 'Martini';
const idade = 48;


// export default function soma(x, y){
//     return x + y
// }
function soma(x, y){
    return x + y
}

export default (x, y) => x * y; // o padrão

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}