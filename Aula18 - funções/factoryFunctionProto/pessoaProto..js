// Composição
// Mixing

const falar = {
    falar(){
            console.log(`${this.nome} está falando!`)
        },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo!`)  
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo!`)
    },
};

// const pessoaPrototyepe = { ...falar, ...comer, ...beber };
const pessoaPrototyepe = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) { // factory function
    
    return Object.create(pessoaPrototyepe, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criaPessoa('Luís', 'Martini');
const p2 = criaPessoa('Maria', 'Olinda');
console.log(p2);
