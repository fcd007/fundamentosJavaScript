class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 20, outros: 2}
    //ele ira ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela
        //o caminho do arquivo relativo ao index.html
        this.heroisIniciais = [
            { img: './img/batman.png', name:'batman'},
            { img: './img/superman.png', name:'superman'},
            { img: './img/aranha.png', name:'aranha'},
            { img: './img/capitao.png', name:'capitao'}
        ]
    }
    // para o uso do this, não podemos usar o static
    inicializar() {
        //vamos pegar todas as funções da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}