const heroi = {
    name: 'Flash',
    age: 100,
    genere: 'Male'
};
// console.log('Name', heroi.name);
// console.log('idade', heroi['age']);
// console.log('Sexo', heroi['genere']);
// console.log('NaoExiste', heroi.naoExiste);
// heroi.id = 0001;
// console.log(heroi);
//saber as chaves
// console.log(Object.keys(heroi));
//saber os valores
// console.log(Object.values(heroi));
const pessoa = {
    height: '10 metros'
};
//jutando dois objetos em apenas uma única referência
const novoObj = Object.assign(heroi, pessoa);
// console.log(novoObj);

//deletando um atributo do objeto
// delete novoObj.name;
// console.log(novoObj);

