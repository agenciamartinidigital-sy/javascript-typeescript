// const h1 = document.querySelector(".container h1");
// const data = new Date();


// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//     return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

//     return meses[numeroMes];
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);
//     console.log(nomeDia, nomeMes)

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//         ` de ${data.getFullYear()}` +
//         ` ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(data);
// // h1.innerHTML = getDiaSemanaTexto(data.getDay());

const h1 = document.querySelector('h1');
const data = new Date();
// const opcoes = { dateStyle: 'full', timeStyle: 'short' };
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});