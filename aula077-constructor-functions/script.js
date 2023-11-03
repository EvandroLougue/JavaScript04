// Função construtora --> objetos
// Função fábrica --> objetos
// CONSTRUTORA -> Pessoa (new)
// fábrica e construtora são como MOLDES pré-prontos para gerar um OBJETO

function Pessoa(nome, sobrenome) {
    // variaveis privadas
    let ID = 12345;
    const metodoInterno = function() {

    };                                  // ponto e vírgula, sintaxe normal do JS
    // atributos ou métodos públicos, podem ser usados fora das funções
    this.nome = nome; 
    this.sobrenome = sobrenome; // necessário o THIS para entender que está se referindo a PESSOA

    this.metodo = function() {
        console.log(`${this.nome}. Sou um método.`)
    };
}                               // não precisa de RETURN, pois o NEW / THIS já indicam o que será retornado

const p1 = new Pessoa('Evandro', 'Lougue');
const p2 = new Pessoa('Janice', 'Lougue');
console.log(p1);
console.log(p2);
p1.metodo();

p2.metodo();