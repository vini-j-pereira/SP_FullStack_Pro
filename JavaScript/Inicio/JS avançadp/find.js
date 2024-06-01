// (Find) = faz uma busca dentro do array ==========

let listagem = [5, 3, "Jose", 2, "Maria"];

let busca = listagem.find((item) => {
    return item === "Jose"; `<---- vai percorrer o array e retornar o item "Jose" se existir ou se não existir ele retorna "undefined"`
})

console.log(busca);

// (Filter) = serve para filtrar os itens de um array ==========

let palavras = ["Vinicius", "Renato", "Carol", "Rosana", "Matheus", "Jose"];

let resultado = palavras.filter((item) => {

    return item.length <= 5; `<----- iremos filtrar palavras com caracteres menores ou igual a 5`

})

console.log(resultado);`<------- Pelo filtro ele deve nos retornar "Carol" e "Jose"`