const { promises } = require('fs');
const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// terminal.question(`Qual é o seu nome \n`, nome => {
//     terminal.question(`Qual é o seu telefone:\n`, telefone =>{
//         console.log(
//             `
//             Nome: ${nome}
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })
//vamos trabalhar com promises
function questionAsync(text) {
    return new Promise((resolve, reject) => {
        terminal.question(`${text}\n`, resolve)
    })
}
//não use variáveis globais ou fora do contexto, escopo local
// error de said efect - pode ocorrer erros que não saber quem manipula
// o estado da variável, isso é muito perigoso em aplicações
let nome = "";
let telefone = "";

Promise.resolve()
    .then(() => questionAsync(`Qual o seu nome?`))
    .then(respostaNome => {
        if(!respostaNome) throw new Error('Campo nome vazio!')
        nome = respostaNome;
    })
    .then(() => questionAsync('Qual o seu telefone?'))
    .then(respostaTelefone => {
        if(!respostaTelefone) throw new Error('Campo telefone vazio!')
        telefone = respostaTelefone;
    })
    .then(() => {
        console.log(
            `
            Nome: ${nome}, Telefone: ${telefone}
            `)
    })
    .catch(error => { 
        console.error('Deu erro, volte mais tarde!', error)
    })
    .finally(() => terminal.close())