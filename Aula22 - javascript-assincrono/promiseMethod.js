// Métodos para Promise()

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject('Cai no erro!') 
                resolve(msg); // só posso mandar um parâmetro
                return;
        }, tempo);
    });
}

// Promise.all; Promise.race, Promise.resolve Promise.reject
// Passar um array
const promises = [
    // 'Primeiro valor',
    // esperaAi(1000, rand(1, 5)),
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // 'Outro valor'
];
// Promise.all(promises)
// .then(valor => {
//     console.log(valor);
// }).catch(e => console.log(e));

// Promise.race(promises).then(valor => {
//     console.log(valor);
//  }).catch(e => console.log(e))

function baixaPagina() {
    const emCache = true;

    if(emCache){
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página rejeitada!')
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log('Erro', e))