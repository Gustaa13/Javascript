let ano = new Date().getFullYear();

for(let i = ano; i >= 1900; i --){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>"
}

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];

for(let carro of carros){
    document.getElementById("teste").innerHTML += carro + " - ";
}