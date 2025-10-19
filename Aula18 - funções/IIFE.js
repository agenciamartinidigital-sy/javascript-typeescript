// Immediately Invoked Funcion Expression - função anônima

// function qualquerCoisa(){
//     console.log(111111111);
// }
// qualquerCoisa();

// const nome = 'Luís';
(function(idade, peso, altura){

    const sobrenome = 'Martini'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luís'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(48, 100, 1.80);
