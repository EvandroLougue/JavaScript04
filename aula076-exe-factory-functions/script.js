function criaCalculadora() {        // é possível criar outras variáveis como objeto, juntamente com o RETURN
    return {
        display: document.querySelector('.display'),    // atributos e variáveis ficarão acima
        //btnClear: document.querySelector('.btn-clear'), // capturar o botão CLEAR na variável / não foi necessário
        
        
        
        
        
        
        
        
        inicia() {                  // método (função) criado dentro de um objeto que está dentro de outra função
            this.cliqueBotoes();
            this.pressionaEnter();
        },  
                                // métodos ficarão ABAIXO
        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // capturar o ENTER para o realizaConta
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1); // função de apagar apenas o ÚLTIMO dado
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch(erro) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', function(e){ // função de capturar o clique do usuário, IMPORTANTE
                const el = e.target;
                if (el.classList.contains('btn-num')) { // condição para saber se a tecla é um número
                    this.btnParaDisplay(el.innerText) // pega o valor HTML dentro do botão  
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();   
                }
            }.bind(this)); // apontar para que use o this da CALCULADORA, não o próprio this (document)
        },

        btnParaDisplay(valor) {
            this.display.value += valor;  // função para exibir o valor do innerText dos buttons
        },










    }
}

const calculadora = criaCalculadora();
calculadora.inicia();