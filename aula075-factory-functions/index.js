function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() { //utilizando GETTER 
            return `${this.nome} ${this.sobrenome} `
        },
        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); 
            console.log(valor);
        },
        fala: function(assunto) { //método (função dentro de objeto)
            return `${this.nome} está falando ${assunto}.`
        },
        altura: a,
        peso: p,
        imc(a, p) {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Evandro', 'Lougue', 1.75, 80);
console.log(p1.imc());
p1.nomeCompleto = 'Evandro Lougue dos Santos'
console.log(p1.nomeCompleto); // se usado o GET, não se chama a função com ()
const p2 = criaPessoa('João', 'Santos', 1.70, 60);
console.log(p2.imc());
console.log(p1.fala('sobre programação'));
