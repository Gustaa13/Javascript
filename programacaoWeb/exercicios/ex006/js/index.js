function eventoClick(){
    alert('Acionou um evento de click');
    document.body.style.background = "purple";
}

function eventoClickDuplo(){
    alert('Acionou um evento de click duplo');
    document.body.style.background = "yellow";
}

function viraVermelho(){
    let div = document.getElementById("caixa");
    div.style.background = "pink";
}

function viraVerde(){
    let div = document.getElementById("caixa");
    div.style.background = "greenyellow"
}

function adicionarTexto(){
    document.getElementById("caixa").append(' a ');
}

function limparTexto(){
    document.getElementById("caixa").innerHTML = "";
}