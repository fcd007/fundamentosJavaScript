//meses começam do zero!
const birthday = new Date(2020,0, 20); //20/01/2020
// console.log(birthday);

//primeira data do UNIX foi lançado
const firstDataToJS = new Date(0);
// console.log(firstDataToJS.getTime());
// poder pegar o dia de hoje
const today = new Date();
// console.log(today.toString());
//console.log(today.toLocaleDateString());

//formato global recomendado!
// console.log(today.toISOString());
const day = today.getDate();
today.setDate(day + 5); // 5 dias depois de hoje
today.setHours(10,30,0); //podemos setar a hora, minutos, segundos e milisegundos
// console.log(today);
//como pegar todos os itens da nossa data de maneira correta
console.log(
    `Dia: ${today.getDay()}
     Mês: ${today.getMonth()}
     Ano: ${today.getFullYear()}
     Horas: ${today.getHours()}
     Minutos: ${today.getMinutes()}
     Segundos: ${today.getSeconds()}`
);

console.log(
    new Date(2020, 12, 4) < new Date(2000, 1, 1)
);
