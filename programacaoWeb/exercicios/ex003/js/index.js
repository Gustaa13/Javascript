// var

var nome, sobrenome, nomeCompleto;

nome = "Gustavo";
sobrenome = "Oliveira";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;

// let

let valor = 10;

{
    let valor = 2;
}

document.getElementById("valor").innerHTML = valor;

// const

const dia = 5;

//dia = 2; // não é possível

document.getElementById("dia").innerHTML = dia;



