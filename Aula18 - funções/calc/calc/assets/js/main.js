// factory function
function criaCalculadora() {
  return {
    // atributos
    display: document.querySelector('.display'), // this.display
    btnClear: document.querySelector('.btn-clear'), 
    resultadoMostrado: false,


    // métodos
    inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    },

    clearDisplay(){
        this.display.value = '';
    },

    apagaUm(){
        this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(){
        let conta = this.display.value;

        if(this.resultadoMostrado) return;

        try {
            
            if(!isNaN(conta) && conta.trim() !== '') {
                // alert('Conta inválida');
                return;
            }
            conta = eval(conta);

            if(conta === undefined || conta === null){
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    },

    cliqueBotoes(){
        // this -> calculadora
        document.addEventListener('click', e => {
            const el = e.target;
            
            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        }); // .bind(this) muda o comportamento
    },

    btnParaDisplay(valor){
        if(this.resultadoMostrado){
            this.clearDisplay();
            this.resultadoMostrado = false;
        }
        this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia(); // desencadeia
