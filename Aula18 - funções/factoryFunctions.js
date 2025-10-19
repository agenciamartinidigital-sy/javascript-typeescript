// Quando a função está dentro de um objeto, a chamamos de método!
// Factory function
// Constructor function

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter

        set nomeCompleto(valor) { // extrair o primeiro nome
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'nada que preste!'){ // método
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}`;
        },

        altura,
        peso,
        // getter
        get imc(){ // uso da palavra getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luís', 'Martini', 1.80, 100);
const p2 = criaPessoa('Jonice', 'Martini', 1.60, 60);
const p3 = criaPessoa('Hélio', 'Martini', 1.80, 80);

console.log(p2.imc);
console.log(p3.imc);





// const p2 = criaPessoa('Jonice', 'Martini', 1.60, 60);
// console.log(p1.fala('bobagem!'));
// console.log(p1.imc())
// console.log(p2.fala('costura e bordado!'))
// console.log(p2.imc())


// Quem chama é o this