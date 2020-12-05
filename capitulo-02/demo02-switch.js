//vamos usar um pouco do nodejs e javascript juntos
// const readLine = require('readline');
// const terminal = readLine.createInterface({
//     //definir o modo de entrada via terminal
//     input: process.stdin, 
//     //todo texto de saída sairá no terminal
//     output: process.output
// })

// const textoMenu = `
// Olá seja bem vindo(a) ao sistema de média
// Opções do Menu abaixo:
// [1] => Menu inicial
// [2] => Menu de herois
// [3] => Menu de guerreiras
// [0] => para sair do sistema`
// console.log(textoMenu);

const opcao = 1;

switch (opcao) {
    case 1:
        console.log('Pressionou 1');
        break;
    case 2:
        console.log('Pressionou 2');
    break;
    case 3:
        console.log('Pressionou 3');
        break;
    case 0:
        console.log('Pressionou 0');
        break;
    default:
        console.log('Opção inválida na entrada');
        break;
}

//mostrando uma pergunta e recebendo parametro na arrow function
// terminal.question('Qual é o seu nome?', (msg) => {
//     console.log('Você escreveu', msg)
//     //para liberar o terminal e não precisar pressionar Ctrl + C
//     terminal.close()
// });

//Criando algo mais inteligente, Menu com objeto
// const questoes = {
//     menuInicial: {
//         texto: textoMenu,
//         fn: menuInicial
//     },

//     opcao1: {
//         texto: 'submenu! Pressione enter para selecionar mais opções.',
//         fn: opcao1
//     }
// }

// function opcao1(msg) {
//     console.log('Não há mais opções.');
//     terminal.close();
// }

// function menuInicial(msg) {
//     //temos que converter a opção string para number
//     const opcap =  Number(msg);
//     //verificar se é uma opção válida
//     if(isNaN(opcao)){
//         throw new Error('Não é um número', msg);
//     }

//     switch (opcap) {
//         case 0:
//             console.log('Saindo, tchau!!!');
//             terminal.close();
//             break;
//         case 1:
//             console.log('menu inicial');
//             terminal.question(
//                 questoes.opcao1.texto,
//                 questoes.opcao1.fn
//             )
//             break;
//         default:
//             console.log('Opção inválida!');
//             break;
//     }
// };

// terminal.question(
//     questoes.menuInicial.texto,
//     questoes.menuInicial.fn
// )