// É uma função que se chama de volta
// function recursiva(max){
//     if(max >= 10) return;
//     max++;
//     console.log(max);
//     recursiva(max);
// }
// recursiva(0);

// function fibonnaci(n){
//     if (n < 2){ // caso-base
//         return n;
//     }
//     return fibonnaci(n - 1) + fibonnaci(n - 2); // recursividade
// }
// console.log(fibonnaci(20));

// function contagem(n) {
//     if(n === 0) {
//         console.log('Fim!');
//         return;
//     }
//     console.log(n);
//     contagem(n - 1); //caso recursivo
// }
// contagem(5);

function fatorial(n){
    if(n < 2) return n; // caso-base
    return n * fatorial(n - 1); // caso recursivo
}
console.log(fatorial(3));

/**
 * n x (n-1)
 */