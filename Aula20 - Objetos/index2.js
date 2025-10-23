// Criar um molde
// Factory functions / Constructor functions / Classes -> padrão de projetos

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luís', 'Martini');
console.log(p1.nomeCompleto); // sem executar o método
// console.log(p1.nomeCompleto()); // executando