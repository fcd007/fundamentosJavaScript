let frutaExisteNoMercado = false;
let temCPUSuficiente = true;

//obter os valores do terminal
const args = process.argv;
const saldo = args[args.length -1];

if(isNaN(saldo)){
    console.log('Valor inválido!');
};

// console.log('args', args);
// console.log('Saldo',  typeof(saldo));
// let tipoCliente = "Premium";
// if(saldo < 9){
//     tipoCliente = "basic";
// }else if(saldo >= 10 && saldo < 20){
//     tipoCliente = "gold";
// }else {
//     tipoCliente = null;
// }

// // null, undefined, vázio, 0 === false!
// if(!tipoCliente){
//     tipoCliente = "indefinido";
// }
// console.log('Tipo do cliente', tipoCliente);

// const operadorOu = 1 > 2 || 2 > 1;
// const operadorE = 1 === 2 && 2 !== 1;
// const operadorNot = !(1 == 2);

// //usando o if-else com operador ternário
// const idade = 16;
// const resultado = idade >= 18 ? "pode dirigir " : "não pode dirigir";
// console.log('Resultado', resultado);
const result = 1 ? (null || ((1 != '1') ? "hello world": "Hackezao")): "não zero";
console.log(result);
