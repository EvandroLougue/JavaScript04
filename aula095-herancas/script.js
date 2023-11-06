// produto -> aumento / desconto
// camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}; 


Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

/////////////////////////////////////////////////
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor; // aqui herdou caracteristicas padrão de Produto, e agora adicionamos uma propriedade exclusiva de Camiseta
};
// 
Camiseta.prototype = Object.create(Produto.prototype) // está herdando o prototype de PRODUTO 
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const camiseta1 = new Camiseta('Regata', 49, 'Preta');


Camiseta.prototype.aumento = function(percentual) {             // aqui estou criando uma função de aumento apenas para a CAMISETA
    this.preco = this.preco + (this.preco * (percentual / 100))
}
camiseta1.aumento(30);
console.log(camiseta1);

////////////////////////////

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;   // aqui herdou caracteristicas padrão de Produto, e agora adicionamos uma propriedade exclusiva de Caneca
    
    /*
    Object.defineProperty(this, 'estoque', { // ERRO
        enumerable: true,
        configurable: false,
        get funcion() {
            return estoque;
        },
        function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });*/
}

Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};
Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};
const caneca1 = new Caneca('Xícara', 29, 'Porcelana', 8);
caneca1.aumento(5);
console.log(caneca1);

let produto = new Produto('Teste', 999999);
console.log(produto);