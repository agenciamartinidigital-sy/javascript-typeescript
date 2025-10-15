// new Data(0)

function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  // const iniciar = document.querySelector('.iniciar');
  // const pausar = document.querySelector('.pausar');
  // const zerar = document.querySelector('.zerar');
  let segundos = 0; // mantém um estado
  let timer;

  function inciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }
  document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    inciaRelogio();
  }

  if (el.classList.contains("pausar")) {
    // clearInterval(inciaRelogio()) // multipliquei a velocidade
    relogio.classList.add("pausado");
    clearInterval(timer);
  }

  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.classList.add("zerado");
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
});
}
relogio();

// function getTimeFromSeconds(segundos){
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-br', {
//         hour12: false,
//         timeZone: 'UTC'
//     });
// }

// function inciaRelogio(){
//     timer = setInterval(function(){
//         segundos++
//         relogio.innerHTML = getTimeFromSeconds(segundos);
//     }, 1000);
// }

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     inciaRelogio();
// });

// pausar.addEventListener('click', function(event){
//     // clearInterval(inciaRelogio()) // multipliquei a velocidade
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.classList.add('zerado')
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });

// Reduzindo o código

