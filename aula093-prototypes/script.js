// Construtora -> MOLDE (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => `ORIGINAL ${this.nome} ${this.sobrenome}`;
}



// Instância

const pessoa1 = new Pessoa('Evandro', 'Lougue');
const data = new Date();
// data -> Date.prototype -> Object.prototype

Pessoa.prototype.nomeCompleto = function() {       // novas funções pré definidas 
    return `${this.nome} ${this.sobrenome}`;
}
// pessoa1 -> Pessoa.protoype -> Object.prototype

console.log(pessoa1);
console.dir(data);

console.log(pessoa1.nomeCompleto())