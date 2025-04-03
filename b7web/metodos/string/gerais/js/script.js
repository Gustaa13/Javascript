let nome = 'Gustavo Oliveira';

let tamanho = nome.length;
console.log(tamanho);

let posicao = nome.indexOf(' ');
console.log(posicao);

let trechoNome = nome.slice(3, 10);
console.log(trechoNome);

let parteNome = nome.substring(10, 15);
console.log(parteNome);

let substituirTrechoNome = nome.replace('Oliveira', 'Freitas');
console.log(substituirTrechoNome);

let paraMaisculo = nome.toUpperCase();
console.log(paraMaisculo);

let juntadoNomes = nome.concat(' de Freitas'); // Pode ser feito apenas com `nome + ' de Fretias'`
console.log(juntadoNomes);

let nomeComEspacos = '     Gustavo     '
let semEspacos = nomeComEspacos.trim(); // Tira apenas os espaços do fim e começo da string
console.log(semEspacos);

let letraNome = nome.charAt(3); // Também pode ser feito com 'nome[3]'
console.log(letraNome);

let nomeDividido = nome.split(' ');
console.log(nomeDividido);

