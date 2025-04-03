const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keypress', textSubmit);

function textSubmit(event){
    if(event.key === 'Enter'){
        const novoLi = document.createElement('li');
        novoLi.innerHTML = input.value;

        ul.appendChild(novoLi);
        
        input.value = "";
    }
}