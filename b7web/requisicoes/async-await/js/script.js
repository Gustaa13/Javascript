// https://jsonplaceholder.typicode.com/posts

async function carregarPosts(){
    let requisicao = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await requisicao.json();
    
    fazerBlog(posts);
}

function fazerBlog(posts){
    let main = document.createElement('main');
    
    for(let i in posts){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let hr = document.createElement('hr');

        h2.innerHTML = posts[i].title;
        p.innerHTML = posts[i].body;

        div.append(h2, p, hr);
        main.append(div);
    }

    document.getElementById('posts').innerHTML = main.innerHTML;
}

document.querySelector('#botao').addEventListener('click', carregarPosts);
