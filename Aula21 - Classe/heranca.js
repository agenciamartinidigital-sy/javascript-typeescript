// Herança
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false; // faz o ligado e desligado
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado!`)
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado){
            console.log(`${this.nome} já foi desligado!`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // usa-se o super()
        this.cor = cor;
        this.modelo = modelo;

    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo, wifi) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.wifi = wifi;
    }
    // métodos!
    ligar() {
        console.log('Você alterou o método ligar do Tablet!')
    }
    fala(){
        console.log('Oieeee!')
    }
}


const s1 = new Smartphone('iPhone', 'Vinho', 'Pro Max');
s1.desligar();
s1.ligar();

const t1 = new Tablet('iPad', 'Air', 'Branco', 'com wifi')
t1.ligar();
t1.fala();
