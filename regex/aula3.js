const {texto, arquivos} = require('./base');

/**
 *  * (opcional) 0 ou n {0,}
 *  + (obrigatório) 1 ou n {1,}
 *  ? (opcional) 0 ou 1 {0,1}
 *  \ caracter de escape
 * {min, max} 
 * {10,} no mínimo 10
 *  {,10} de 0 a 10
 *  {5,10} de 0 a 10
 * {1} uma vez só
 */


// console.log(texto);

// const regExp1 = /Jo+ão+/gi;

// console.log(texto.match(regExp1));

// const regExp2 = /\.(jpg|jpeg)/gi;
// const regExp2 = /\.jpe{0,1}g/gi;
const regExp2 = /\.(jp|JP)(e|E)*(g|G)/g;

for(const arquivo of arquivos){
    const valido = arquivo.match(regExp2)

    // if(!valido) continue;
    console.log(arquivo, valido);
}
