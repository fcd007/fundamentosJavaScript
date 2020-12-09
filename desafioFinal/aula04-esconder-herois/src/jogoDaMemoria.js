class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 20, outros: 2}
    //ele ira ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela
        //o caminho do arquivo relativo ao index.html
        this.heroisIniciais = [
            { img: './img/batman.png', name:'batman'},
            { img: './img/capitao.png', name:'capitao'},
            { img: './img/mulher.png', name:'mulher'},
            { img: './img/superman.png', name:'superman'}
        ]

        this.iconePadrao = './img/heroi.png'
        this.heroisOcultos = []
    }
    // para o uso do this, não podemos usar o static
    inicializar() {
        //vamos pegar todas as funções da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forçaa a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

     // lógica para embaralhar o jogo da memória
     embaralhar() {
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
        //vamos fazer a tela esperar 1 segundo para atualizar
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
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
        this.heroisOcultos = heroisOcultos;
    }

    jogar() {
        this.embaralhar()
    }
}