// Object.keys - pegar as chaves
// Object.values - pega os valores
// Object.entries - leio os dois

const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)){
    // console.log(`${chave}: ${valor}`);
    console.log(valor[0], valor[1]);
}