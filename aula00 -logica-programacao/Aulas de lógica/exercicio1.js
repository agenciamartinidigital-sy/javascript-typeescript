// Escreva uma função que recebe 2 números e retorne o maior deles.

// n1 > n2 ? console.log(`${n1}`) : console.log(`${n2}`)
// function maiorDeles(n1, n2){
//     return n1 > n2 && n2 > n1 ? n1 : n2;
    
// }
// console.log(maiorDeles(15, 8));
// let maior = maiorDeles(15, 8);
// console.log(maior);

const maiorDeles = (n1, n2) => Math.max(n1, n2);
console.log(maiorDeles(15, 16))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

function maiordeTodos(n1, n2){
    return (n1 > n2) ? n1 : n2; // operador ternário
}
console.log(maiordeTodos(20, 33));

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

function max(x, y){
    if(x > y) {
        // return x;
        return `O maior número entre ${x} e ${y} é: ${x}`;
    } /* else*/
        // return y;
        return `O maior número entre ${x} e ${y} é: ${y}`;
}
console.log(max(20, 100))

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

function max1(x, y) {
    if(x > y) return x; return y;
}
console.log(max1(10, 11));

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max2(400, 500));

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

const max3 = (x, y) => x > y ? x : y; // operador ternário e arrow function
console.log(max3(4, 5));

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX')

const max4 = (x, y) => Math.max(x, y); // arrow function e o método Math.max(x, y)
console.log(max4(1, 2));