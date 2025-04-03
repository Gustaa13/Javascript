const pessoa = ["Gustavo", "Oliveira", 22, "Aluno"];

pessoa.pop();
pessoa.shift();

document.getElementById("teste1").innerHTML = pessoa.join(" - ");

pessoa.push("aluno");
pessoa.unshift("Gustavo");

document.getElementById("teste2").innerHTML = pessoa.join(" ~ ");

/* */

const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["suco", "refrigerante", "carne"];

document.getElementById("teste3").innerHTML = lista1.concat(lista2).join(" !  ");

/* */

const jogadores = [
    "Biro Biro", 
    "Ribamar", 
    "Pelé", 
    "Maradona", 
    "neymar", 
    "Cristiano Ronaldo", 
    "Caça rato", 
    "Gustavo"
];

const craques = jogadores.slice(2, 7);

document.getElementById("teste4").innerHTML = craques.join(", ");
document.getElementById("teste5").innerHTML = craques.sort().join(" @ ");

/* */

const numeros = [1, 37, 12, 54, 6, 31];

numeros.sort(function(a,b){return a-b});

const maior30 = numeros.filter(maiorQue30);

function maiorQue30(value, index, array){
    return value > 30;
}

document.getElementById("teste6").innerHTML = numeros.join(" ");
document.getElementById("teste7").innerHTML = maior30;

