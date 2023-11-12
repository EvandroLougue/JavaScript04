function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} ${sobrenome} está falando.`)
        },
        beber() {
            console.log(`${this.nome} ${sobrenome} está bebendo.`)
        },
        comer() {
            console.log(`${this.nome} ${sobrenome} está comendo.`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Evandro', 'Lougue');
console.dir(p1);

const p2 = criaPessoa('Leandro', 'Monteiro');
console.log(p2); 