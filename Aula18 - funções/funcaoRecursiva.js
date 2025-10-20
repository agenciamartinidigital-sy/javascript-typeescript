// É uma função que se chama de volta
// function recursiva(max){
//     if(max >= 10) return;
//     max++;
//     console.log(max);
//     recursiva(max);
// }
// recursiva(0);

function fibonnaci(n){
    if (n < 2){ // caso-base
        return n;
    }
    return fibonnaci(n - 1) + fibonnaci(n - 2); // recursividade
}
console.log(fibonnaci(20));

