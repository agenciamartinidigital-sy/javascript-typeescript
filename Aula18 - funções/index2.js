function soma (...n){
    return n.reduce((total, valor) => total + valor)
}
console.log(soma(1))
console.log(soma(1, 2))
console.log(soma(1, 2, 3))
console.log(soma(1, 2, 3, 4))

function soma1(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(soma1(10, 20))
console.log(soma1(1, 2))
console.log(soma1(1, 2, 3))
console.log(soma1(1, 2, 3, 4))