let contagemHabilitada = true;

function ativarContagem(){
    if(contagemHabilitada){
        contagemHabilitada = false;
        tempo = setInterval(function(){
            let contador = document.getElementById("tempo").innerHTML;
            document.getElementById("tempo").innerHTML = parseInt(contador) + 1;
        }, 1000);
    } 
}

function desativarContagem(){
    clearInterval(tempo);
    contagemHabilitada = true;

}

function reiniciarContagem(){
    clearInterval(tempo);
    contagemHabilitada = true;
    document.getElementById("tempo").innerHTML = 0;
}