function clicou(){
    /* */
    const teste = document.querySelector('#teste');

    teste.innerHTML = '<strong>Testando</strong>';
    document.querySelector('#teste2').innerText = 'Testando2';

    teste.prepend("(Adicionando antes) ");    
    teste.append(" (Adicionando depois)");
    /* */ 

    /* */
    let novoElemento = document.createElement("strong");
    novoElemento.innerText = " Testando3";

    teste.appendChild(novoElemento);
    /* */
 
    /* */
    const teste3 = document.querySelector('#teste3');

    let texto = document.createElement("p")
    texto.innerText = "Texto qualquer";

    teste3.after(texto);
    /* */
}