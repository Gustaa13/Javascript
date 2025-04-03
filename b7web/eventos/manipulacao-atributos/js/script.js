function clicou(){
    const input = document.querySelector('#input1');

    if(input.hasAttribute('placeholder')){
        console.log("Tem placeholder");
    }else{
        console.log("Não tem placeholder");
    }

    input.setAttribute('placeholder', 'Placeholder alterado');
}

function clicou2(){
    const input = document.querySelector('#input2');
    const botao2 = document.querySelector("#botao2");

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao2.innerText = "Mostrar senha";
    }else{
        input.setAttribute('type', 'text');
        botao2.innerText = "Ocultar senha";
    }
}