const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let num of numeros){
//     if (num === 5 /*|| num === 5*/){
//         console.log(`Pulei o número ${num}`);
//         continue;
//     }
//     // if(num === 5){
//     //     continue;
//     // }
//     console.log(num);
// }
// console.log('#'.repeat(50))

// for(let num of numeros){
//     if (num === 5){
//         console.log(`Parei no número ${num}`)
//         break;
//     }
//     console.log(num)
// }

// for (let i in numeros){
//     let numero = numeros[i]
//     if( numero === 5){
//         console.log(`Pulei o número ${numero}`);
//         continue;
//     }
//     console.log(numero)
// }

// for (let i = 0; i < numeros.length; i++){
//     let numero = numeros[i];

//     if (numero === 5){
//         console.log(`Pulei o número ${numero}`);
//         continue;
//     }
//     console.log(numero);
// }


// Loop infinito
let i = 0
while (i < numeros.length){
    let numero = numeros[i];

    if(numero === 3){
        console.log(`Pulei o número ${numero}`);
        i++;
        continue;
    } 
    console.log(numero);
    i++;
}
console.log('#'.repeat(50))

let a = 0;
while (a < numeros.length){
    let numero = numeros[a];
    if (numero === 5){
        console.log(`Pulei o número ${numero}`)
    } else {
        console.log(numero)
    }
    a++;
}
console.log('#'.repeat(50))

let b = 0
do {
    let numero = numeros[b];
    if (numero === 6){
        console.log(`Pulei o número ${numero}`)
    } else {
        console.log(numero)
    }
    b++;
} while( b < numeros.length);