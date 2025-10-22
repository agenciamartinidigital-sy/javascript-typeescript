/**
 * Reduz o array a um único valor
 * 
 * Some todo os números (Reduce)
 * Retorne um array com os pares (Filter)
 * Retorne um array com o dobro dos valores (Map)
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, index, array){
    // if(valor % 8 === 0) acumulador.push(valor);
    // acumulador.push(valor * 2);
    if(valor % 2 !== 0) {
        acumulador += valor;
        // console.log(valor);
    }
    return acumulador;
}, 0 /* valor inicial*/);
console.log(total);