// try {
//   // Código que pode gerar um erro
//   let resultado = 10 / 0; 
// } catch (e) {
//   // Código para tratar o erro
//   console.error("Ocorreu um erro:", e.message);
// } finally {
//   // Código que sempre será executado
//   console.log("Execução finalizada.");
// }

function soma(x, y){
    if(typeof x !== 'number'){
        throw new Error(`${x} ${typeof x} não é um número!`)
    }
    if(typeof y !== 'number'){
        throw new Error(`${y} ${typeof y} não é um número!`)
    }
    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma(1, 'Luís'));
} catch (error){
    console.log(error);
    console.log(`${error.message}`)
}
