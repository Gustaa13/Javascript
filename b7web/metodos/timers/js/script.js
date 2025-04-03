function showTime(){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    let horario = hora + ':' + minutos + ':' + segundos;

    document.querySelector('.tempo').innerHTML = horario;
}

let timer;

function iniciar(){
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer);
}

let timer2;

timer2 = setTimeout(function(){
    alert('Testando...');
}, 2000);

//clearTimeout(timer2);
