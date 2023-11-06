// 705.484.450-52       070.987.720-03
/*

7x 0x 5x    4x 8x 4x    4x 5x 0x    
10 9  8     7  6  5     4  3  2
70 0  40   28  48 20    16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito);
Se o dígito for maior que 9, então considera 0

7x 0x 5x    4x 8x 4x    4x 5x 0x 5x
11 10 9     8  7  6     5  4  3  2
77  0 45    32 56 24    20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro dígito)
Se o dígito for maior que 9, então considera 0
*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // expressão regular para 'TUDO QUE NÃO FOR NÚMERO'
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((acum, valor) => acum + Number(valor), 0));