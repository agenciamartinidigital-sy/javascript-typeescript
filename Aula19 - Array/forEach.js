const a1 = [10, 20, 30];

// for(let valor of a1){
//     console.log(valor);
// }
// a1.forEach(function(valor, index, array){
//     console.log(valor);
// });
// // Simulação de Reduce
let total = 0;
a1.forEach(valor => {
    total += valor
});
console.log(total);