// funcao definida por FUNCTION tem uma variável oculta chamada ARGUMENTS na qual guarda parâmetros enviados na função
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
};
funcao(1, 2, 3, 4, 5);

function funcao2(a, b, c, d, e, f) { // parâmetros que recebem os argumentos.
    console.log(a, b, c, d, e, f);
};

funcao2(1, 2, 3); // argumentos enviados para os parâmetros
/////////////////////////////////////
function funcao3(a, b = 1, c = 3) {
    console.log(a + b + c);
};
funcao3(8, undefined ,5);
//////////////////////////////////
function funcao4({nome, sobrenome, idade}) { // desestruturação
    console.log(nome, sobrenome, idade);
};
let objeto = {nome: 'Evandro', sobrenome: 'Lougue', idade: 32};
funcao4(objeto);

//////////////////////////////////////

function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
};
let valores = [5, 10, 15, 30, 50]; // valores jogados em uma variável array para usar na função
funcao5(valores);

/////////////////////////////////////

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        console.log(acumulador);
    }
};
conta('+', 0, 10, 50, 32, 49);