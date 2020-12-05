//enquanto não muda, não para!
let termoDeParada = true;

let contador = 0;

while (termoDeParada) {
    //termo de para = contator < 10    
    termoDeParada = contador < 10;
    if(contador % 2 === 0) {
        console.log(`Valores pares: ${contador}`);
    }
    //fazendo valor contador = contadorAtual + 1;
    contador += 1;
}

//roda a primeira vez e depois faz o teste para validar
do {
    console.log('Rodar a primeira vez...', termoDeParada);
} while(termoDeParada);

while (termoDeParada) {
    console.log('Termo de parada false, não entra aqui!');
}