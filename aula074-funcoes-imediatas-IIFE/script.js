// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION

function qualquerCoisa() {
    console.log(111112345);
};
qualquerCoisa();

/////

(function() {
    console.log('TESTE');
})();

nome = 'Evandro';
console.log(nome);

//////////
(function(idade, peso, altura) { // aqui recebeu os dados
    const sobrenome = 'Lougue';
    function criaNome() {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Evandro'));
    }
    falaNome();
    console.log(idade, peso, altura)
})(32, 80, 1.75); // função anônima imediata também pode receber os parâmetros para si mesma