// chamado automaticamente o new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: objA.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: ObjA
};

Object.setPrototypeOf(objB, objA);

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB);  // um vai herdando prototypes do outro

console.dir(objC.chaveA);

////////////////////////////////////////////////

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.acrescimo = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};


const p1 = new Produto('Fogão', 499);
p1.desconto(100);
p1.acrescimo(100);
console.log(p1);


// obj literal
const p2 = {
    nome: 'Celular',
    preco: 899
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.acrescimo(30); 
console.log(p2);

const p3 = Object.create(Produto.prototype);

console.log(p3);