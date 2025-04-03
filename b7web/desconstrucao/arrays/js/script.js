let info = ['Gustavo Oliveira', 'Gustavo', 'Oliveira'];

let [ nomeCompleto, nome, sobrenome ] = info;
console.log(nomeCompleto, nome, sobrenome);

let [nomeCompleto2, , sobrenome2] = info;
console.log(nomeCompleto2, sobrenome2);

let [nome3, sobrenome3] = ['Gustavo', 'Oliveira'];
console.log(nome3, sobrenome3);

function criar(){
    let a = [1, 2, 3];
    return a;
}

let [a, b, c] = criar();
console.log(a, b, c);