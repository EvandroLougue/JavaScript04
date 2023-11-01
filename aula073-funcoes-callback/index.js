function rand(min = 1000, max = 3000) { // gerar número aleatório entre x e y
    const tempo = Math.random() * (max - min) + min;
    return Math.floor(tempo);
};

function f1(callback) {
    setTimeout(function() {
    console.log('F1');
    if (callback) callback();
    }, rand())
};

function f2(callback) {
    setTimeout(function() {
        console.log('F2');
        if (callback) callback();
        }, rand())
};
function f3(callback) {
    setTimeout(function() {
        console.log('F3');
        if (callback) callback();
        }, rand())
};
////////////////////////////
f1(function() {
    f2(function() {
        f3(function() {
           console.log('Olá, MUNDO!'); 
        });
    });
}); 

/////////////////////// MESMO CÓDIGO ACIMA, PORÉM SEM TANTA IDENTAÇÃO

f1(callBack);

function callBack() {
    f2(callBack2);
};

function callBack2() {
    f3(callback3);
};

function callback3() {
    console.log('Olá, MUNDO!');
};