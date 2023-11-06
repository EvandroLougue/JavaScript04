// getters / setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePriv = estoque;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        //value: estoque,     // valor do parâmetro
        //writable: false,  // inalterável
        configurable: true,
        get: function() {
            return estoquePriv;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                return;
            } else {
            estoquePriv = valor;
        }
        }
    });
}

function criaProduto(nome) {        // função factory
    return {
        get nome() {            // get obtém valor
            return nome;
        },
        set nome(valor) {       // set setta o valor
            valor = valor.replace('coisa', '')      // interceptando valor recebido
            nome = valor;
        }
    };
}

const p1 = new Produto('Headset', 399, 5);
console.log(p1);
p1.estoque = 'aaaaa'  // envia o valor para o parâmetro em SET
console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa'
console.log(p2.nome);