// (Desconstruindo Arrays e Objetos):

let pessoa = {
    nome: "Vinicius",
    Sobrenome: "Pereira",
    emppresa: "Altos Baita Web",
    cargo: "Programador FullStack"
};

// Selecionando (propriedades) a serem extraidos do objeto:

let { nome, cargo, empresa } = pessoa; 

`Para renomear uma propriedade basta deposi do nome atual adicionar os : e o nome a ser criado.`
`Ex:`

let { nome:nomePessoa, cargo:ocupação, empresa:trabalho } = pessoa;

console.log(nome);
console.log(pessoa);


//(Arrays)=======================

let nomes = ["Vinicius", "Renato", "Matheus"];

`Para desconstruir um array basta selecionar a possição desejada dentro do array e a propriedade.`
`Ex:`

let { 0:Vinicius, 2:Matheus } = nomes;

`Podemos extrair tambem utilizando os parametros somente`
`Ex:`

let [primeiroNome, SegundoNome] = nomes;

` Assim o preimeiro parametro -> primeiroNome se refere a propriedade "Vinicius"   
E o segundo parametro -> SegundoNome se refere a propriedade "Renato".`