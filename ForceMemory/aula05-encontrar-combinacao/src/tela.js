const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"

class Tela {
    static obterCodigoHTML(item) {
        return`
        <div class="col-md-3">
            <div class="card" style="width: 12rem;" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
                <img src="${item.img}" name="${item.nome} class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }

    static alterConteudodoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        //usando para passar código gerado HTML
        conteudo.innerHTML = codigoHtml;
    }

    static gerarStringPelaImagem(itens) {
        //para cada item da lista, vai executar a função obter código
        //ao final, vai concatenar tudo em uma única string
        //muda de Array para String/
        return itens.map(Tela.obterCodigoHTML).join('')
    }
    //vamos pegar os itens iamgens e alterar dinamicamente
    static atualizarImagens(itens) {
        const codigoHtml = this.gerarStringPelaImagem(itens);
        Tela.alterConteudodoHTML(codigoHtml);
    }

    //vamos pegar o click e acionar funcionalidade jogar
    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
}