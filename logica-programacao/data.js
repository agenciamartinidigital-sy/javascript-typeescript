// const tresHoras = 60 * 60 * 3 * 1000
// // const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());

// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMilliseconds());
// console.log(data.getMinutes());
// console.log(data.getHours(), data.getMinutes(), data.getMinutes());
// console.log(data.getTime());
// console.log(data.getUTCDate());
// console.log(data.getTimezoneOffset());

// const data = new Date(2025, 9, 5); // a, m, d, h, M, s, ms
// console.log(data.toString());

// const data = new Date();
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());

function zeroAEsquerda(num){
    return num > 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
