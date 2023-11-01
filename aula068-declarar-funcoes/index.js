falaOi();
// Declaração de função (function hoisting)
function falaOi() {
    console.log('Oiiiii!');
}

// FIRST CLASS OBJECTS
const souUmDado = function() { // joga uma função anônima dentro de variável
    console.log('Sou um dado');
}
souUmDado();

function executaFuncao(funcao) {
    funcao();
};
executaFuncao(souUmDado);

// ARROW FUNCTIONS 
const arrowFunction = () => {
    console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um OBJETO também pode ter uma FUNCTION 
const obj = {
    falar() {
        console.log('Estou falando via função de objeto')
    }
}
obj.falar();