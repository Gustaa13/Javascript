let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

console.log(...Object.keys(lista));
console.log(...Object.values(lista));
console.log(Object.entries(lista));

let pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Oliveira',
    idade: 56
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(...Object.entries(pessoa));