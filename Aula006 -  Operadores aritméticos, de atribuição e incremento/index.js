/**
 * Aritméticos
 * + Adição / Concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % módulo
 */

/**
 * ()
 * **
 * * / %
 * + -
 */
// const num1 = 5
// const num2 = 2
// const num3 = 10

// console.log(num1 * num2 / num3)
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 / num2)
// console.log(num1 * num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)
let contador = 1
// pós-incremento
contador++ //2 
contador++ //3
contador++ //4
contador++ //5
console.log(contador)

let cont = 1
console.log(cont++)
console.log(cont)
// pré-incremento

let cont1 = 1
console.log(++cont1)
console.log(cont1)

// Operador de decremento
let contador1 = 1
contador1--
console.log(contador1)

let contador2 = 1
console.log(contador2)
--contador2 
console.log(contador2)
console.log('---contador2---')
// incremento de mais de um valor
let passo = 2
let contador3 = 1
contador3 = contador3 + passo 
console.log(contador3)
console.log(contador3++)
console.log(contador3++)

// Maneira mais fácil

let contador4 = 2
contador4 **= 10  // contador = contador + passo
console.log(contador4)

// parseInt - inteiro; parseFloat - flutuante; Number() - vai se virar
// NaN - Not A Number
const num1 = 10
const num2 = parseInt('5')
const num3 = parseFloat('5.2')
const num4 = Number('5.2')
const num5 = Number('Luís')

console.log(num1 + num5)
console.log(typeof num5)