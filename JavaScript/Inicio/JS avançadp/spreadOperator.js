//(Spread Operator):

let primeiros = [1, 2, 3];

let numeros = [4, 5, 6];

`Spread Operator serve para adicionar propriedades de um array, dentro de outro array.`
`Ex:`

// (EX:) -> let numeros = [...primeiros, 4, 5, 6]; 
`para acionar o Spread Operator, basta colocar os 3 pontos e o nome do array a ser integrado.
Ex: ...primeiros  `

`Nesse caso a variavel (numeros) ficaria assim -> [1, 2, 3, 4, 5, 6]`


// (Objetos)======================

let pessoa = {
    nome: "Vinicius",
    idade: 38,
    cargo: "Dev. FullStak"
}

let pessoaInfo = {
    ...pessoa, // <----adicionando o Spread Operator
    status: "ATIVO",
    cidade: "São José"
}

// (function)=====================

function novoUsuario(info){
    let novosdados = {
        ...info, // <------- aqui usamos o Spread Operator e logo apos escrevemos as novas propriedades dentro do objeto.
        status:"ATIVO",
        inicio:"31/05/2024",
        codigo:"123123"
    }
}


novoUsuario({nome: "José", sobrenome:"Pereira", cargo:"Dev"}) // <--- propriedades dentro da função
