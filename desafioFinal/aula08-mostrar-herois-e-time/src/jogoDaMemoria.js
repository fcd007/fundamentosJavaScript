class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 20, outros: 2}
    //ele ira ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        //o caminho do arquivo relativo ao index.html
        this.heroisIniciais = [
            { img: './img/batman.png', nome:'batman'},
            { img: './img/capitao.png', nome:'capitao'},
            { img: './img/mulher.png', nome:'mulher'},
            { img: './img/superman.png', nome:'superman'}
        ]

        this.iconePadrao = './img/heroi.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    // para o uso do this, não podemos usar o static
    inicializar() {
        //vamos pegar todas as funções da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forçaa a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        // botao verifica a seleção dos herois se retorna se está ok ou não
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        //quando executar iremos pegar o contexto das variaveis herois img e nome
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

     // lógica para embaralhar o jogo da memória
     async embaralhar() {
        const copias = this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        //vamos gerar os ids e depois usar
        .map( item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        //ordenar de forma aleatoriamente
        .sort(() => Math.random() - 0.5)
        //vamos verificar se as imagens estão atualizando
        this.tela.atualizarImagens(copias)
        //carregando game para iniciar
        this.tela.exibirCarregando()
        //
        const idDoIntervalo = this.tela.iniciarContador()
        //vamos fazer a tela esperar 3 segundo para atualizar
        await this.util.timeout(3000)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)

    }
    //ele vai trocar a imagem de todos os herois pela icone padrão
    //como fizemos no construtor, vamos  extrai somente o que
    //precisamos, usando sintaxe ({ chave: 1 }) retornar o que tiver 
    //dentro dos parenteses
    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id, //o js olhar o contexto atual e vai pegar o valor id
            nome, // do mesmo modo irá fazer com valor padrão já no contexto
            img: this.iconePadrao //aqui usamos a imagem padrão substituindo
        }))
        //atualizando a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardar os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos;
    }

    exibirHerois(nomeDoHerois) {
        //vamos procurar o heroi pelo nome em nossos heroisInicias
        //vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHerois === nome)
        //vamos criar a função na tela, para exibir somente heroi selecionado
        // console.log(nomeDoHerois)
        this.tela.exibirHerois(nomeDoHerois, img)
        // console.log(nomeDoHerois, img)
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        //bora verificar a quantidade de herois selecionados
        // e depois tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                //adicionar a escolha a uma lista, esperando pela próxima
                //vez que clicar
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade for 1 o usuário só pode escolher mais um
                //vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados
                //zerar a lista anterior
                this.heroisSelecionados = []
                //conferimos se os nomes e ids batem conforme o esperado
                if (opcao1.nome === item.nome && opcao1.id !== item.id) {
                    //aqui verificamos se são ids diferentes para o 
                    //usuário não clicar duas vezes no mesmo heroi
                    this.exibirHerois(item.nome)
                    //como padrão e true, não precisa passar nada
                    this.tela.exibirMensagem()
                    // console.log(item.nome)
                    return;
                }
                //caso tenha erro exibe mensagem (false)
                this.tela.exibirMensagem(false)
                // alert('Combinação incorreta!')
                //fim do case
            break;
        }
    }

    mostrarHeroisEscondidos() {
        //vamos pegar todos os herois da tela e colocar seu
        //respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for (const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find( item => item.nome == heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar() {
        this.embaralhar()
    }
}