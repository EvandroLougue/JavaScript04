// Filtrar os pares
// Dobrar os valores 
// Reduzir (somar tudo)
// tudo em um só código
//      índices  0   1   2   3   4  5  6  7   8   9  10  11  12 13 14
const numeros = [5, 50, 80, 91, 18, 1, 2, 6, 22, 13, 27, 32, 7, 8, 9];

const numPares = numeros.filter(function(valor){
    return valor % 2 === 0
}).map(function(valor) {
    return valor * 2;
}).reduce(function(acumulado, valor) {
    return acumulado += valor;
});
console.log(numPares); 


/*
const dobro = numeros.map(function(valor) {
    return valor * 2;
});
console.log(dobro);

const soma = numeros.reduce(function(acumulado, valor) {
    acumulado += valor;
    return acumulado;
}, 0);
console.log(soma);
*/ 

// 50, 80, 18, 2, 6, 22, 32, 8
/// 100, 160, 36,  4, 12,  44, 64, 16
//// 436