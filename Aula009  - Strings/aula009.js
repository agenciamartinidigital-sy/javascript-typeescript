// escapar o caractere
// texto é iterável
// strings são indexáveis
let umaString = "Um texto";
let outraString = "O rato roeu a roupa do rei de roma.";

// charAt()
console.log(umaString.charAt(1));
// .concat
console.log(umaString.concat(' em um lindo dia'));
console.log(`${umaString} em um lindo dia`);

// indexOf()
console.log(umaString.indexOf('o', 3));

// lastIndexOf()
console.log(umaString.lastIndexOf('o', 3)); // -1
console.log(umaString.lastIndexOf('m', 3)); // 1

// match/search/replace
console.log(umaString.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ]
console.log(umaString.match(/[a-z]/)); // [ 'm', index: 1, input: 'Um texto', groups: undefined ]
console.log(umaString.search(/x/)); // 5
console.log(umaString.replace('Um', 'Outro')); // Outro texto
console.log(umaString.replace(/Um/, 'Outro'));// Outro texto
console.log(umaString.replace(/t/, '#'));// Um #exto
console.log(umaString.replace(/t/g, '#'));// Um #ex#o
// length é um atributo
console.log(umaString.length); // 8
// .slice() fatiar
console.log(outraString.slice(-3)); // ma.
console.log(outraString.slice(-5, outraString.length - 1)); // roma
console.log(outraString.slice(-5, - 1)); // roma
console.log(outraString.slice(32)); // ma.

// subString
console.log(outraString.substring(outraString.length - 5)); // roma.
console.log(outraString.substring(outraString.length - 5, outraString.length - 1)); // roma

// split()
console.log(outraString.split('r')); // [ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma.' ]

console.log(outraString.split(' ', 2)); // [ 'O', 'rato' ]

// toUpperCase ou toLowerCase
console.log(outraString.toUpperCase()); // O RATO ROEU A ROUPA DO REI DE ROMA.
console.log(outraString.toLowerCase()); // o rato roeu a roupa do rei de roma.
