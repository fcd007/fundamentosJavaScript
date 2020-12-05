//vamos a partir de agora criar classes e ver como ela se comporta no Javascript
class Heroi {
    atacar() {
        console.log(`Atacou!`)
    }

    defender() {
        console.log(`Defendeu!`)
    }
}
// //criando um objeto a parir da classe
// const heroi = new Heroi();
// heroi.atacar();
// heroi.defender();

//criando um Heroi2
class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    atacar() {
        console.log(`O ${this.nome} atacou!`);
    }

    defender() {
        console.log(`O ${this.nome} defendeu!`);
    }
}

// const heroi2 = new Heroi2(
//     `Flash`, 25
// )

// heroi2.atacar();
// heroi2.defender();
class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade;
    }
}
//não precisamos usar o new quando utilizamos 
const anoNascimento = Heroi3.obterAnoNascimento(31);
console.log(`Ano de Nascimento é ${anoNascimento}`);
//criando funções de testes
// class Teste {
//     constructor(nome){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }
// //erro no construtor
// const test = new Teste(
//     'Dantas'
// )
// console.log(test.nome)
// class Test {
//     constructor(){
//         console.log(`Ola mundo!`);
//     }
// }

// new Test;
// class Test {
//     hello() {
//         console.log('Ola')
//     }
// }

// new Test().hello()
// new Test()['hello']()
class Test{
    static hello(){
        console.log('Olá')
    }
}

Test.hello()
Test['hello']()