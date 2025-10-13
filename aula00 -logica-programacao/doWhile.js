// const nome = 'Luís';

// let i = 0;
// while(i < nome.length){
//     console.log(nome[i]);
//     i++; // i += 1
// }

// console.log('Segue a vida...')

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;
let count = 1;

while (rand !== 10){
    // rand = random(min, max);
    console.log(rand);
    count++
}
console.log(`Foram gerados ${count} até o 10`);

console.log('#################')

// Executa pelo menos 1 vez
do {
    // rand = random(min, max);
    console.log(rand);
} while (rand !== 10);