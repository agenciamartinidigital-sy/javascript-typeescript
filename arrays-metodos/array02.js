// forEach, map, filter

// const array = [1, 5, 10, "olá", true];
const array = [1, 5, 10];

// const array1 = array.filter(function(el, i, arr){
//     return typeof el === 'number';
// });
// console.log(array1)

// const array1 = array.filter(el => typeof el === 'number');
// console.log(array1);

let soma = 0;
const array2 = array.forEach(i => soma += i);
console.log(soma);