window.onload = () => {
    console.log('Tela carregou!');
    const btn = document.getElementById('btnCalcular');
    function obterValorInput(id) {
        const item = document.getElementById(id);
            return item.value
    }
    //obtendo valores a partir do input e do click
    btn.onclick = click
        function click() {
            const tipoOperacao = obterValorInput('tipoOperacao')
            const valor1 = obterValorInput('valor1')
            const valor2 = obterValorInput('valor2')
            
            const resultado = Matematica[tipoOperacao](
                valor1, valor2
            )
            
            //fazer o resultado ir para o campo do HTML
            document.getElementById('resultado').innerText = `
            A operação de ${tipoOperacao}, ${valor1} por ${valor2} é 
            ${resultado}`
        }
    }

