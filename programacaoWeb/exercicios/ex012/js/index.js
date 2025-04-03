function buscarCEP(){
    let entrada = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest;
    ajax.open('GET', 'https://viacep.com.br/ws/'+ entrada + '/json/');
    ajax.send();

    ajax.onload = function(){
        //document.getElementById("texto1").innerHTML = this.responseText;

        let objeto = JSON.parse(this.responseText);
        let logradouro = objeto.logradouro;
        let cidade = objeto.localidade;
        let estado = objeto.estado;

        document.getElementById("texto2").innerHTML = "Estado: " + estado + "<br> Cidade: " + cidade +  "<br> Logradouro: " + logradouro;
    }
}