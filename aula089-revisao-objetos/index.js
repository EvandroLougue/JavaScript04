// factory function / constructor -> padrões de projetos que pode-se utilizar / CLASSES 

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {    // quando chamar no console.log, deixar sem ()
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Evandro', 'Lougue');
console.log(p1.nomeCompleto);

//////////////// constructor
// new cria um {} vazio, e usa o THIS para atrelar ao objeto - não precisa de RETURN
function Pessoa(nome, sobrenome, idade)  {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    Object.freeze(this);    // trava o objeto, deixa inalterável 
};



const p2 = new Pessoa('Evandro', 'Lougue', 32);
p2.nome = 'Leandro';
console.log(p2);