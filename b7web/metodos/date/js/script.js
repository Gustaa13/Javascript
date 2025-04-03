let data = new Date();

console.log(data);
console.log(data.toDateString());

let data2 = new Date(2020, 0, 1, 12, 30, 12);
console.log(data2);

let data3 = new Date('2020-01-01 15:42:15');
console.log(data3);

let data4 = new Date(0);
console.log(data4);

let mes = data.getMonth();
console.log(mes);

let dia = data.getDate();
console.log(dia);

let hora = data.getHours();
console.log(hora);

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let miliSegundosAteHoje = data.getTime();
console.log(miliSegundosAteHoje);

let data5 = new Date();

data5.setFullYear(2022);
console.log(data5);

data5.setMonth(11);
console.log(data5);

data5.setDate(1);
console.log(data5);

data5.setDate(data5.getDate() + 5);
console.log(data5);

data5.setHours(data5.getHours() + 20);
console.log(data5);