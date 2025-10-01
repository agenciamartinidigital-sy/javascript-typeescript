const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>Seu número dividido por 2 é ${numero / 2}</p>`;
texto.innerHTML += `<p>Seu número multiplicado por 2 é ${numero * 2}</p>`;
texto.innerHTML += `<p>A raiz quadrada de seu número é ${Math.sqrt(numero, 2)}</p>`;
texto.innerHTML += `<p>A raiz quadrada (numero ** 0.5) de seu número é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>Seu número arredondado para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Seu número é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Seu número é NaN? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais ${numero.toFixed(2)}</p>`;
texto.innerHTML += `<p>O binário do seu número é ${numero.toString(2)}</p>`;
texto.innerHTML += `<p>Este número ${numero} é um inteiro? ${Number.isInteger(numero)}</p>`;
