///                0           1          2       3
const nomes = ['Evandro', 'Leandro', 'Janice', 'João'];
// strings, objetos, funções, números 
//const nomes = new Array('Evandro', 'Leandro', 'Janice', 'João');
nomes[2] = 'Lougue';
delete nomes[2];            // deixa como EMPTY
console.log(nomes);

let novo = [...nomes]; // assim não irá alterar a variável ORIGINAL

console.log(novo);

const removido = novo.pop(); // ou .shift() para remover o primeiro, deslocando índices de array

console.log(novo);
console.log(nomes);
console.log(removido);

novo.push('EVANDRO LOUGUE'); // adicionar elemento no final // ou UNSHIFT() para add no início, porém desloca índice
console.log(novo);


const slice = nomes.slice(0, -3);
console.log(slice);

const nome = 'Evandro Lougue dos Santos';
const nome2 = nome.split(' ');
console.log(nome2);

const nome3 = nome2.join(' '); // unir um array em uma string 
console.log(nome3);