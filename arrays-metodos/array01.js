// every, some, forEach, map, filter

const array = [1, 5, 10, "olá", true];

// some() e every()
const soNumeros = array.every(function(el){
    return typeof el === 'number'
})
// console.log(soNumeros);

const sohNumeros = array.some(function(el) {
    return typeof el === 'number' && el > 20;
});
console.log(sohNumeros);