//  DOBRE OS NÚMEROS
//      índices  0   1   2   3   4  5  6  7   8   9  10  11  12 13 14
const numeros = [5, 50, 80, 91, 18, 1, 2, 6, 22, 13, 27, 32, 7, 8, 9];
const dobro = numeros.map(valor => valor * 2);  // função simplificada 
console.log(dobro);

///////////////////////

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'NOME' do objeto
// Adicione uma chave ID em cada elemento 

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

console.log(pessoas);

const strings = pessoas.map(objeto => objeto.nome);
console.log(strings);
////
const removeNome = pessoas.map(obj => ({ idade: obj.idade }));
    //delete obj.nome;
    //return obj;

console.log(removeNome);
/////

const addId = pessoas.map(function(obj, indice) {
    const newObject = {...obj}
    newObject.id = indice + 1;
    return newObject;
});
console.log(addId);