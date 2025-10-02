// IIFE
function meuEscopo() {
    const form = document.querySelector('.form');
    const div = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        });
        
        console.log(pessoas);
        div.innerHTML = '';
        for (let pessoa of pessoas) {
    div.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
}
        // div.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();

// usar .value para pegar os valores no HTML