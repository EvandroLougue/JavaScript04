/*
function criaCalculadora() {        // é possível criar outras variáveis como objeto, juntamente com o RETURN
    return {
        display: document.querySelector('.display'),
        
        
        
        
        
        
        
        
        inicia() {                  // método (função) criado dentro de um objeto que está dentro de outra função
            this.cliqueBotoes();
            this.pressionaEnter();
        },  
        ////////////////////////////////////// métodos ficarão ABAIXO
        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // capturar o ENTER para o realizaConta
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        //////////////////////////
        clearDisplay() {
            this.display.value = '';
        },
        /////////////////////////
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);   // função de apagar apenas o ÚLTIMO dado
        },
        //////////////////////////
        btnParaDisplay(valor) {
            this.display.value += valor;                            // função para exibir o valor do innerText dos buttons
        },
        /////////////////////////
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
        //////////////////////////////
        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', function(e){             // função de capturar o clique do usuário, IMPORTANTE
                const el = e.target;
                if (el.classList.contains('btn-num')) {                      // condição para saber se a tecla é um número
                    this.btnParaDisplay(el.innerText)                       // pega o valor HTML dentro do botão  
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

        










    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// CALCULRAODRA POR FUNCTION CONSTRUCTOR

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.fazCalculo();
            }
        })
    };
    /////////
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.eraseOne();
            if (el.classList.contains('btn-eq')) this.fazCalculo();
        });
    
    };
    /////////
    this.fazCalculo = () => {
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

    }
    /////////
    this.eraseOne = () => {
        this.display.value = this.display.value.slice(0, -1);       // função de deletar um número por vez
    };
    /////////
    this.clearDisplay = () => {
        this.display.value = ' ';                                   // função de limpar tudo
    };
    /////////
    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;                         // função de adicionar número clicado
        this.display.focus();
    };
    

}

const calculadora = new Calculadora(); // use o MOLDE (function) para criar uma NOVA calculadora
calculadora.inicia();