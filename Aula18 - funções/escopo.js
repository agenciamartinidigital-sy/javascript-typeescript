// escopo léxico

const nome = 'Luís';
function falaNome(){
    // const nome = 'Martini';
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Martini';
    falaNome();
}

usaFalaNome();