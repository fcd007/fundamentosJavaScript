//criando uma simples função que retorna uma string
function myFunction1(params) {
    return `uuuuhuhhu`
};
//criando uma função que retorna algo para uma contante
const myFunction2 = function(params){
    return `aeeee ${params}`;
};
//criando função utilizando arrow function
const myFunction3 = (params) =>{
    return `Aeeee ${params}`;
};
//fazendo o retorno da função usando arrow function
const myFunction4 = params => `Aeee ${params}`;

//podemos criar funções dentro de objetos
const obj1 ={
    myFunction: params => `Aeeeee ${params}`
};
//fazendo a chamada da função através do atributo do objeto
obj1.myFunction('test');
//criando um segundo objeto 
const obj2 = {
    myFunction (params) {
        return `Aeee ${params}`
    },
}