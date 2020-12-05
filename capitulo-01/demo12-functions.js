// function today() {
//     const data = new Date();
//     console.log(`Hoje pe dia: ${data.getDate()}`)
// }

// // today();

// // function sum(value1, value2) {
// //    console.log(`Soma dos ${value1} + ${value2} =`,value1 + value2);
// // }

// function sum2(value1, value2) {
//     return value1 + value2;
// }
// // chamada da função para ajudar em cálculos
// // sum(2,3);
// // sum(22,38);
// const num = 8;
// const num2 = 5;
// // console.log('Soma = ' ,sum2(num, num2));

// result = sum2(num, num);
// console.log('Resultado', result);

// function multiplicar(value1, value2) {
//     const result = value1 * value2;
//     return result;
// }
// // mostrando o resultado utilizando template string
// console.log(`O resultado de ${num} * ${num2} multiplicação é ${multiplicar(num,num2)}`);
function descontoFunctionario(salarioBruto, desconto) {
    const salarioLiquido = salarioBruto -(salarioBruto * desconto);
    return salarioLiquido;
}

const funcionario1 = {
    name: 'Claudeilton Dantas',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
};

const funcionario2 = {
    name: 'Juliana Lima',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
};
// substituindo regra de negócio por funções
// const descontoFuncionario1 = 
//     funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto);

// const descontoFuncionario2 = 
//     funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto);
// console.log(
//     `Funcionario1: ${descontoFuncionario1}
//     Funcionario2: ${descontoFuncionario2}`
// );

funcionario1.salarioLiquido = descontoFunctionario(funcionario1.salarioBruto, funcionario1.desconto);
funcionario2.salarioLiquido = descontoFunctionario(funcionario2.salarioBruto, funcionario2.desconto);

console.log(`
  Salario de ${funcionario1.name} R$${funcionario1.salarioLiquido}
  Salario de ${funcionario2.name} R$${funcionario2.salarioLiquido}
`);