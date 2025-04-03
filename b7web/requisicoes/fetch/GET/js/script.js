function loadPosts(){
    document.getElementById('posts').innerHTML = 'Carregando...';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(requisicao){
            return requisicao.json();
        })
        .then(function(json){
            makeBlog(json);
        })
        .catch(function(){
            console.log('Houve um erro!');
        })
}

function makeBlog(lista){
    let main = document.createElement('main');

    for(let i in lista){
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let hr = document.createElement('hr');

        h3.innerHTML = lista[i].title;
        p.innerHTML = lista[i].body;

        div.append(h3, p, hr);
        main.append(div);
    }

    document.getElementById('posts').innerHTML = main.innerHTML;
}