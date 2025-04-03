const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

let texto = JSON.stringify(carro);

document.getElementById("texto1").innerHTML = texto;

let objeto = JSON.parse(texto);

document.getElementById("texto2").innerHTML = objeto.motor[2];

/* */

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('objetoExterno').innerHTML = this.responseText;
    let objeto = JSON.parse(this.responseText);
    alert(objeto.estado);
}