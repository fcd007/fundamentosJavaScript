const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(text) {
    return new Promise((resolve, reject) => {
        terminal.question(`${text}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode está vazio!'))
        })
    })
}

async function main() {
    try {
       const nome = await questionAsync('Qual o seu nome?');
       const telefone = await questionAsync('Qual o seu telefone?');
       console.log(`Nome: ${nome}, telefone: ${telefone}`);
    } catch (error) {
        console.error('Deu muito ruimmm', error.stack)
    }
    finally {
        terminal.close();
    }
}
//chamada da função
main();
