const ID_CONTEUDO = "conteudo"

class Tela {
    static obterCodigoHTML(item) {
        return`
        <div class="col-md-3">
            <div class="card" style="width: 12rem;">
                <img src="${item.img}" name="${item.nome} class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
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
}