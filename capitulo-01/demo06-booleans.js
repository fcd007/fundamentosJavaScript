const poderDirigir = true;
if(poderDirigir){
    console.log('Ela pode dirigir');
};

//invertendo de falso para verdadeiro 0 => falso, 1 => verdadeiro
const saldoEmConta = 0;
if(!saldoEmConta){
    console.log('Nao tem saldo!');
};
// força o valor a true ou false
const boolComString = "Bora codar Dantas";
console.log('boolComString', !!boolComString);
//negação
console.log('boolComString', !boolComString);

//negação + força a bool
console.log(
    'negação + força bool ', 
    !(!!boolComString),
    !false
);