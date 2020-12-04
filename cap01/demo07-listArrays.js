// const myList = [];
// const myListOfTasks = [
//     'send email',
//     'add food to dog',
//     'clean room'
// ];

//exibindo valores do array ou list de tarefas
// console.log('\n--- List Task ---\n');
// console.log(myListOfTasks[0]);
// console.log(myListOfTasks[1]);
// console.log(myListOfTasks[2]);
// console.log(myListOfTasks[3]); // undefined  not value

//quantidade de itens do array
// console.log(`Alista possui : ${myListOfTasks.length} elementos`);

//adicionar item no array
// myListOfTasks.push('Format projects tasks');
// console.log(myListOfTasks);

//como remover último elemento da lista
// const lastListItem = myListOfTasks.pop();
// console.log(lastListItem, myListOfTasks);

//remover o primeiro item da lista
// const firstItemList = myListOfTasks.shift();
// console.log(firstItemList, myListOfTasks);

//  remover um item a partir de um indíce
// console.log(myListOfTasks[2]);
// //salvando o valor do array indíce 2, 3ª elemento
// const indiceListItem = myListOfTasks[2];
// myListOfTasks.splice(2, 1);
// console.log(myListOfTasks);

const itens = [ 
    1, 
    'computador', 
    0.22
];

//verificar o tipo do array
// console.log(typeof(itens));
//verificar se é array da forma correta
// console.log(Array.isArray(itens));

//podemos ordenar valores do array
// const numbers = [ 6, 1, 3, 2, 4];
// console.log(numbers.sort());

//funciona para textos: sim claro
// const texts = ['j', 'o', 'A', 'a', 'l', 'z'];
// console.log(texts.sort());

//lista de objetos - juntar dois arrays
// const newItem = itens.concat([1, 2, 3]);
// console.log(newItem);

//juntar dois arrays em uma string
// console.log(itens.join(','));

//verificar indice do item
const index = itens.indexOf('computador');
console.log(`indíce do item ${itens[index]} = ${index}`);

//quando o elemento não é encontrado retorna -1, cuidado ao avaliar com
//tipos booleans, pois -1 convertido irá ser true, neste caso não temos elemento
const index2 = itens.indexOf('chaves');
console.log(`indíce do item ${itens[index2]} = ${index2}`);