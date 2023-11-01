// Return
// retorna um valor
// termina a função

function soma(a, b) {
     return a + b;
}
/*
document.addEventListener('click', function() {
     document.body.style.backgroundColor = 'black'; // NÃO retorna valor, mas ainda assim cumpre a função exigida
})
*/
function criaPessoa(nome, sobrenome) {
     return {nome, sobrenome};
}
const p1 = criaPessoa('Evandro', 'Lougue');

const p2 = {
     nome: 'Evandro',
     sobrenome: 'Lougue'
};

console.log(p1);
console.log(p2);

//////////

function falaFrase(comeco) {
     function falaResto(resto) {
          return comeco + ' ' + resto;
     }
     return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo!'));

////////////
/*
function duplica(n) {
     return n* 2;
};

function triplica(n) {
     return n* 3;
};

function quadruplica(n) {
     return n* 4;
};
*/
function criaMultiplicador(multiplicador) {
     // MULTIPLICADOR
     function multiplicacao(n) {
          return n * multiplicador; // consegue usar dados de uma função parent
     }

     return multiplicacao;
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));