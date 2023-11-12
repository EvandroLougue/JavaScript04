const pessoas = [
    {id: 3, nome: 'Evandro'},
    {id: 2, nome: 'Leandro'},
    {id: 1, nome: 'Janice'}
];
/*
const novaPessoa = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novaPessoa[id] = {...pessoa};
}
*/
const novaPessoa = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novaPessoa.set(id, {...pessoa});
}

console.log(novaPessoa);