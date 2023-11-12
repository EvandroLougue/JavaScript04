// classe = função construtora

//SUPERCLASSE
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta; 
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia} - Conta: ${this.conta} - Seu saldo: U$ ${this.saldo.toFixed(2)} `);
};
/*
const conta1 = new Conta(11, 7, 200);
conta1.depositar(200);
conta1.sacar(300);
*/

function CC(agencia, conta, saldo, limite) {        // especializando conta
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {       // aqui está limitando o saque ao saldo+limite
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
///////////////////////
function CP(agencia, conta, saldo) {        // especializando conta
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 222, 0, 100);
console.log(cc);
cc.sacar(50);
cc.depositar(20);

console.log();

const cp = new CP(11, 333, 0, 100);
console.log(cp);
cp.sacar(50);
cp.depositar(20);