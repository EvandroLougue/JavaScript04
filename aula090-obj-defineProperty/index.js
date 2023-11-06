// defineProperty - defineProperties 

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        value: estoque,     // valor do parâmetro
        writable: false,  // inalterável
        configurable: true
    });


    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        value: estoque,    // valor do parâmetro
        writable: true,  //   valor alterável
        configurable: false // não deixa alterar, nem apagar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   // mostra a chave
            value: estoque,    // valor do parâmetro
            writable: true,  //   valor alterável
            configurable: false // não deixa alterar, nem apagar
        },
        preco: {
            enumerable: true,   // mostra a chave
            value: estoque,    // valor do parâmetro
            writable: true,  //   valor alterável
            configurable: false // não deixa alterar, nem apagar
        },

    });
};
const p1 = new Produto('Headset', 399, 5);
p1.estoque = 30000;
console.log(p1);

console.log(Object.keys(p1));