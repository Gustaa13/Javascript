// https://jsonplaceholder.typicode.com/posts

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(`Status: ${response.status}`);
        return response.json();
    })
    .then((json) => {
        alert(`Título da requisição: ${json[0].title}`);
    })
    .catch((error) => {
        alert("Ocorreu um problema na requisição");
        console.log("erro: ");
        console.log(error);
    })
    .finally(() => {
        alert("Processo finalizado");
    });

    alert("opa");
}

function inserir(){
    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
}

document.querySelector('#botao').addEventListener('click', clicou);

document.querySelector('#inserir').addEventListener('click', inserir);