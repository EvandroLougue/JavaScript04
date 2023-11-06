/*
const pessoa = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
};
const chave = 'nome';

console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa[chave], pessoa['sobrenome']);
*/
////////////////////////////
// new Array(); [] 
const pessoa1 = new Object();
pessoa1.nome = 'Evandro';
pessoa1.sobrenome = 'Lougue';
pessoa1.idade = 32;
//console.log(pessoa1);
pessoa1.falarNome = function() {
    console.log(`${this.nome} ${pessoa1.sobrenome} está falando o próprio nome.`);
}
pessoa1.falarNome();

pessoa1.getDataNasc = function() {
    data = new Date();
    ano = data.getFullYear();
    datanasc = ano - this.idade;
    return `Nascido no ano de ${datanasc}`;
}

console.log(pessoa1.getDataNasc()); 

//delete pessoa1.nome;
//console.log(pessoa1);

/////////////////////////////

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}