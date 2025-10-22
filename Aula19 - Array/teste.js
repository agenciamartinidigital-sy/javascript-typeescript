const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log(soma);

let soma1 = 0
for(const numero1 of numeros){
    soma1 += numero1;
}
console.log(soma1);

let soma2 = 0;
for(let numero in numeros){
    soma2 += numeros[numero];
}
console.log(soma2);