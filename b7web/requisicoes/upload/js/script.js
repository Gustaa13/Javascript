async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'bla');
    body.append('arquivo', arquivo);

    let requisicao = await fetch('https://jsonplaceholder.typicode.com', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}