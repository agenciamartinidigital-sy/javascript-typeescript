// Closure -> habilidade de acessar seu escopo léxico
// Global
function retornaFuncao(nome){
    // const nome = 'Luís';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luís');
const funcao2 = retornaFuncao('Martini')
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());