function mostrarImagem() {
    let imagem = document.getElementById('imagem').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById('area').appendChild(img);
}

function mostrarImagemAlternativo() {
    let leitor = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    leitor.onloadend = function() {
        let img = document.createElement('img');
        img.src = leitor.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    leitor.readAsDataURL(imagem);
}