function retornaFuncao(nome) {
    return function(){
        return nome;
    };
}
//habilidade que a função tem de acessar o seu escopo léxico
const funcao = retornaFuncao('Evandro');
const funcao2 = retornaFuncao('Lougue');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());