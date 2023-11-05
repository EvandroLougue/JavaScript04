//  Some todos os números (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)
//      índices  0   1   2   3   4  5  6  7   8   9  10  11  12 13 14
const numeros = [5, 50, 80, 91, 18, 1, 2, 6, 22, 13, 27, 32, 7, 8, 9];
//const dobro = numeros.map(valor => valor * 2);  // função simplificada 

const soma = numeros.reduce(function(acumulador, valor, indice, array) { // chama função call back, agora com parâmetro padrão ACUMULADOR
  //  if (valor % 2 === 0) acumulador.push(valor);    // array filtrando apenas os pares
  acumulador.push(valor * 2);                           // array com dobro dos valores
 //   acumulador += valor;
    return acumulador;                                //return acumulador + valor;

}, []);                  // pode-se colocar um valor inicial para o acumulador
console.log('Soma total: ', soma);
///////////////////////

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Evandro', idade: 32 },
    {nome: 'Leandro' , idade: 41 },
    {nome: 'Janice' , idade: 60 },
    {nome: 'João' , idade: 68 },
    {nome: 'Pedro' , idade: 30 },
    {nome: 'Roberto' , idade: 35 },
    {nome: 'Sandra' , idade: 40 },
    {nome: 'Ana' , idade: 25 }
];

const maisVelho = pessoas.reduce(function(acumulador, valor) { //callback function // comparar um valor com o próximo
    if (acumulador.idade > valor.idade) return acumulador;  // acumulador será sempre o primeiro indice se não settar um valor padrão após }
    return valor;                                          // acumulador sozinho nesse caso é o objeto inteiro
});
console.log(maisVelho);