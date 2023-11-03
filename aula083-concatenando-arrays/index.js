const nomes = ['Evandro', 'Leandro', 'Janice', 'João, '];
const nomes2 = ['Roberto', 'Julio', 'Pedro', 'Felipe'];

//const nomes3 = nomes.concat(nomes2, [9, 10, 11], 'LOUGUE');
// ...rest -> ...spread 
const nomes3 = [...nomes, ...nomes2, 1, 2, 3, 4, 5, "outra string", ...[10, 11, 12]]; // utilidades do SPREAD em arrays
console.log(nomes3);