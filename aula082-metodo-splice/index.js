////                         -5         -4       -3      -2       -1
////               0          1          2        3       4        5
const nomes = ['Evandro', 'Leandro', 'Janice', 'João', 'Sandra', 'Pedro'];

// nomes.splice(índice, delete, elemento1, elemento2, elemento3);
// pop
const removidos = nomes.splice(0, 0, 'Luiz', 'Fernando'); // (-1, 1) seria igual o POP // (0, 1) seria igual o SHIFT
console.log(removidos);                       // (.length, 0, elemento) seria igual ao PUSH
console.log(nomes);                           // (0, 0, elemento) seria igual o UNSHIFT 