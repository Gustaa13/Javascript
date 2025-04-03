let data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();
console.log(mes);

let dia = data.getDate();
console.log(dia);

let diaDaSemana = data.getDay();
console.log(diaDaSemana);

let hora = data.getHours();
console.log(hora);

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let milisegundos = data.getMilliseconds();
console.log(milisegundos);

let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR);

var hoje = new Date();
var vencimento = new Date(2025,1,28);

if(hoje > vencimento){
    console.log("Conta vencida!");
}else{
    console.log("Conta não vencida!");
}

var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

var diferencaDeTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDeDias = Math.ceil(diferencaDeTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDeDias + " dias");