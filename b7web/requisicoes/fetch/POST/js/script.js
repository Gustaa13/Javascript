async function testandoPOST() {
    document.getElementById('posts').innerHTML = "Carregando...";

    let requisicao = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let posts = await requisicao.json();

    console.log(posts);
}