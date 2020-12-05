//usamos o require para importar os módulos internos do nodejs
// para pegar dos arquivos usamos o ./ para acesso
const Matematica = require('./matematica');
//vamos pegar o valor do usuário no terminal
const readline = require('readline');

const terminal = readline.createInterface({
    //criando entrada via terminal
    input: process.stdin,
    //criando saída no terminal
    output: process.stdout
});

terminal.question('Insira o primeiro valor:\n', valor1 => {
    terminal.question('Insira o segundo valor \n', valor2 => {
        terminal.question('Insira a operação\n', tipoOperacao =>{
            //vamos pegar o resultado da operação com o tipo
            const resultado = Matematica[tipoOperacao](
                //pegamos os dois valores passamos para a função selecionada
                Number(valor1), Number(valor2)
            )
            //retornamos o tipo da operação, os dois valores e qual o resultado
            console.log(`Operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
            )
            //pedimos que seja fechado ou encerrado o terminal
            terminal.close()
        })
    });
});

// console.log(Matematica.somar(2,3));
// console.log(Matematica.multiplicar(2,3));
