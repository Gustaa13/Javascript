// https://jsonplaceholder.typicode.com/posts

async function readPosts(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = '';
        
        for(let i in json){
            let postdiv = document.createElement('div');
            let posth1 = document.createElement('h1');
            let postp = document.createElement('p');

            posth1.innerHTML = json[i].title;
            postp.innerHTML = json[i].body;

            postdiv.appendChild(posth1);
            postdiv.appendChild(postp);

            postArea.appendChild(postdiv);
        }

    }else{
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
        addNewPost(title, body);
    }else{
        alert("Preencha todos os campos.");
    }
})

readPosts();