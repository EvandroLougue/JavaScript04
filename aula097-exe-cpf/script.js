// 705.484.450-52       070.987.720-03
/*

7x 0x 5x    4x 8x 4x    4x 5x 0x    
10 9  8     7  6  5     4  3  2
70 0  40   28  48 20    16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito);
Se o dígito for maior que 9, então considera 0

7x 0x 5x    4x 8x 4x    4x 5x 0x 5x
11 10 9     8  7  6     5  4  3  2
77  0 45    32 56 24    20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro dígito)
Se o dígito for maior que 9, então considera 0
*/
/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // expressão regular para 'TUDO QUE NÃO FOR NÚMERO, substituir POR'
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((acum, valor) => acum + Number(valor), 0));
*/

function validaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
};

validaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;              // checagem dos requisitos de um CPF
    if (this.isSequency() === true)  return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);             // esse cpfParcial não tem ligação com o parâmetro da criaDigito
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCPF = cpfParcial + digito1 + digito2;     // CPF completo, já calculado e validado
    return novoCPF === this.cpfLimpo;
};
validaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;               // aqui os cálculos são feitos e os valores retornados
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); 
}
validaCPF.prototype.isSequency = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);    // impede números iguais
    return sequencia === this.cpfLimpo;
};

const cpf = new validaCPF('070.987.720-03');
console.log(cpf.valida());

if (cpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
};