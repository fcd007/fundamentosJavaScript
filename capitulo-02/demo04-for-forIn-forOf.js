//vamos analisar um pouco sobre os laços de repetição
//com o for, forIn e forOf

let textoPar = "par";
let textoImpar = "impar";

// for (let index = 0; index <= 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar;
//     console.log(`Decisao ${index} = ${decisao}`);
// }

//criando uma lista de objetos
//criar os id usando forma aleatória
const minhaListaDeHerois = [
    {   //não utilize para gerar ids, apenas como exemplo mesmo!
        id: parseInt(Math.random() * 1024),
        nome: 'Flash',
        poder: 'Velocidade'
    },
    {   //não utilize para gerar ids, apenas como exemplo mesmo!
        id: parseInt(Math.random() * 1024),
        nome: 'Batman',
        poder: 'Dinheiro'
    },
    {   //não utilize para gerar ids, apenas como exemplo mesmo!
        id: parseInt(Math.random() * 1024),
        nome: 'Capitão America',
        poder: 'Força'
    },
]

// console.log(minhaListaDeHerois)
// for (let index = 0; index < minhaListaDeHerois.length; index++) {   
//     const elemento = minhaListaDeHerois[index];
//     console.log(
//         `
//         id: ${elemento.id},
//         nome: ${elemento.nome},
//         Poder: ${elemento.poder}
//         `
//     );
// }
//não precisa do contador - usando o forIn - iterando pelo indice
// for (const index in minhaListaDeHerois) {
//     const elemento = minhaListaDeHerois[index];
//     console.log(
//         `
//         id: ${elemento.id},
//         nome: ${elemento.nome},
//         poder: ${elemento.poder}
//         `
//     )
    
// }
// não precisa usar index para iterar nos elementos
for (const item of minhaListaDeHerois) {
    console.log('Nome: ', item.nome);
}
