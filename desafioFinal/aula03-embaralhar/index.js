function onLoad() {
    const dependencias = {
        tela: Tela //a classe Tela é global
    }
    //vamos inicializar o jogo da memória
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    //vamos inicializar o jogo com os herois 
    jogoDaMemoria.inicializar();
}

window.onload = onLoad