// Método estático pertence a classe, não a instância
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar!')
    }
}

const control1 = new ControleRemoto('LG');
control1.aumentarVolume();
control1.aumentarVolume();
ControleRemoto.trocaPilha(); // apenas para a classe
console.log(control1);


