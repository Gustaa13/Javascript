let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let paraString = lista.toString();
console.log(paraString);

let paraString2 = lista.join(', ');
console.log(paraString2);

let posicaoString = lista.indexOf('Corante');
console.log(posicaoString);


/* */ console.log("") /* */


lista.pop();
let listaSemUltimo = lista;
console.log(listaSemUltimo);

lista.push('Massa');

lista.shift();
let listaSemPrimeiro = lista;
console.log(listaSemPrimeiro);

lista.splice(2, 1); 
console.log(lista);

let lista2 = ['Prato', 'Liquidificador', 'Forno'];

let listasJuntas = lista.concat(lista2);
console.log(listasJuntas);

listasJuntas.sort();
console.log(listasJuntas);

listasJuntas.reverse();
console.log(listasJuntas);


/* */ console.log(""); /* */


let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.map(function(item) {
    return item * 2;
});
console.log(lista4);

lista4 = lista4.filter(function(item) {
    if(item < 20){
        return true;
    }else{
        return false;
    }
});
console.log(lista4);

lista3 = lista3.every(function(item) {
    return (item > 20)? true : false;
});
console.log(lista3);

lista3 = [45, 4, 9, 16, 25];
lista4 = [];

lista4 = lista3.some(function(item) {
    return (item > 20)? true : false;
});
console.log(lista4);

let lista5 = [74, 1, 47, 16, 12];
let lista6 = [];

lista6 = lista5.find(function(item) {
    if(item == 16) return true;
});
console.log(lista6);

lista6 = lista5.findIndex(function(item) {
    if(item == 16) return true;
});
console.log(lista6);
