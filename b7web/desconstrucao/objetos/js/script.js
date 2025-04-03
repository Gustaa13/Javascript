let pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Oliveira',
    idade: 58,
    social:{
        facebook:'Gustavo face',
        instagram:{
            url:'@gustavo',
            seguidores: 100
        }
    }
};

let {nome:nomeDiferente, sobrenome, social:{facebook}, social:{instagram:{url:instagram}}, cpf = '000.000.000-00'} = pessoa;
console.log(nomeDiferente, sobrenome, facebook, instagram, cpf);

function pegarNomeCompleto({nome, sobrenome}){
    return `${nome} ${sobrenome}`;
}
console.log(pegarNomeCompleto(pessoa));
