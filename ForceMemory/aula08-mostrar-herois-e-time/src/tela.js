//metodos estáticos não podem acessar o 'this'
//nao iremos colocar o this  no construtor 
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"

//mensagem de alerta acerto ou erro
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIBLE = "invisible"

//mostrar carregando do jogo
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"

const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHTML(item) {
        return`
        <div class="col-md-3">
            <div class="card" style="width: 12rem;" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
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

    static exibirHerois(nomeDoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        //para cada elemento encontrado na tela, vamos alterar a imagem
        //para a imagem inicial dele
        //com o forEach, para cada item, dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
    //por padrão iremos utilizar o sucesso = true
    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIBLE)
        //vamos fazer a mensagem desaparer depois de 1 segundo
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIBLE)
    }

    static exibirCarregando(mostrar = true ) {
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar) {
            carregando.classList.remove(CLASSE_INVISIBLE)
            return;
        }
        carregando.classList.add(CLASSE_INVISIBLE)
    }

    static iniciarContador() {
        let contagemRegressiva = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        //vamoso substituir o texto começando $$contador segundos
        //onde está o $$contador adicionaremos  o valor
        const identificadorNoTexto = "$$contador"
        const textoPadrao = `Começando em ${identificadorNoTexto} segundos..`
        //vamos criar uma função em linha para atualizar o texto
        // a cada segundo passado
        const atualizarTexto = () => 
        (elementoContador.innerHTML = 
            textoPadrao.replace(identificadorNoTexto, contagemRegressiva--))
        atualizarTexto()
        //a cada 1 segundo setInterval irá atualizar o texto
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo;
    }

    static limpaContador(idDoIntervalo) {
        clearInterval(idDoIntervalo)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }

    static configurarBotaoMostrarTudo(funcaoOnClick) {
        const btnMostrarTudo  = document.getElementById(ID_BTN_MOSTRAR_TUDO)
        btnMostrarTudo.onclick = funcaoOnClick
    }
}