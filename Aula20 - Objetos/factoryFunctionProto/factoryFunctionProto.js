function criaPessoa(nome, sobrenome) {
    const pessoaPrototyepe = {
        falar(){
            console.log(`${this.nome} está falando!`)
        },

        comer(){
            console.log(`${this.nome} está comendo!`)  
        },

        beber() {
            console.log(`${this.nome} está bebendo!`)
        },
        
    };
    return Object.create(pessoaPrototyepe, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criaPessoa('Luís', 'Martini');
const p2 = criaPessoa('Maria', 'Olinda');
console.log(p1);
console.log(p2);