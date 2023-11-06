// Object.assign (des, any)
// Object.getOwnPropertyDescriptor(obj, 'prop')
// usado para saber as propriedades da chave de um objeto. writable, configurable, value, enumerable;

const produto = {nome: 'Notebook', preco: 1999, material: 'Metal'};
const outraCoisa = {                // além de copiar os valores para ficarem independentes, também é possível adicionar novas chaves demtrp dessa variável
    ...produto,
    material: 'porcelana'
};
    const caneca = Object.assign({}, produto, {material: 'plástico', Processador: 'Intel Core i7'}); // aqui eu posso puxar valores de outro objeto e ainda implementar novos em uma nova variável

outraCoisa.nome = 'Geladeira'
outraCoisa.preco = 2500;

console.log(produto);
console.log(outraCoisa);
console.log(caneca);

Object.defineProperty(produto, 'nome', {            // alterando propriedades de chaves de um produto
    writable: false,
    configurable: false,
    value: 'Qualquer coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.keys(produto)); // apenas as chaves sem os valores
console.log(Object.values(produto));  // exibe apenas os valores
console.log(Object.entries(produto));   // retorna as chaves em arrays separados

for (let [entry, valor] of Object.entries(produto)) {   
    console.log(entry, valor);
};

for (let entry of Object.entries(produto)) {   
    console.log(entry[0], entry[1], entry[2]);
};