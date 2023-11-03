function* gerador1() {
    // qualquer código
    yield 'Valor 1';
    // qualquer código
    yield 'Valor 2';
    // qualquer código
    yield 'Valor 3';
}; 

const g1 = gerador1();
for (let valor of g1) {
    console.log(valor);
}

/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

/*
////// Gerador infinito - função
function* gerador2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/
///// Gerador que delega tarefa a outro gerador 

function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
};

function* gerador4() {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
};

let g4 = gerador4();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

/////////
function* gerador5() {
    yield function() {
        console.log('Vim do y1');
    };
    // código
    yield function () {
        console.log('Vim do y2');
    };

};

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();