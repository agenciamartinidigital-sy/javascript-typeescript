class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        const partes = valor.trim().split(' ');
        this.nome = partes.slice(0, 3).join(' ');
        this.sobrenome = partes.slice(3). join(' ');
    }
}

const p1 = new Pessoa('Jonice', 'Martini');
p1.nomeCompleto = 'Jonice Luís Carlos Ferreira dos Santos Martini';
console.log(p1.nome);
console.log(p1.sobrenome);