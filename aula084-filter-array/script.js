// Filter , Map, Reduce
// Filter sempre irá retornar um array, mesma qtd de elementos ou menos

// retorne os números maiores que 10 
//      índices  0   1   2   3   4  5  6  7   8   9  10  11  12 13 14
const numeros = [5, 50, 80, 91, 18, 1, 2, 6, 22, 13, 27, 32, 7, 8, 9];

/*
function callbackFilter(valor, indice, array) {
    if (valor > 10)  {
    return true;
} else {
    return false;
}
    console.log(valor, indice, array);
    return valor > 10;  // assim já retorna true ou false
}

const numFiltrados = numeros.filter(callbackFilter); // a minha função FILTER é que irá executar a callbackFilter que eu criei
console.log(numFiltrados);                           // filter apenas recebe TRUE ou FALSE
*/
////////////
const numFilter = numeros.filter(valor => valor > 10)    // fórmula simplificada em arrow function, callback

console.log(numFilter);

//////////
// Retorne as pessoas que tem o nome com 6 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra A

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

const mais6letras = pessoas.filter(objeto => objeto.nome.length >= 6);
console.log(mais6letras);

const mais50anos = pessoas.filter(valor => valor.idade > 50);
console.log(mais50anos);

const letraA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a'); // identifica última letra
});
console.log(letraA);