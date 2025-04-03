function apertou(){
    console.log("Apertou!");
}

function segurou(){
    console.log("Segurou!");
}

function soltou(evento){
    console.log(evento.key);
    console.log(evento.code);

    if(evento.shiftKey) console.log("Apertou shift");
    if(evento.ctrlKey) console.log("Apertou ctrl");
    if(evento.altkey) console.log("Apertou alt")
    
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

