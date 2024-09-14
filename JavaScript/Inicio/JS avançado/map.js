//(Map) = Percorre todo o array ==========

let lista = ["Vinicius", "Jose", "Renato", "Carol"];

lista.map((item, index) => {

    console.log(item); `O item é o conteudo da lista -- EX:(Vinicius, jose, Renato, Carol)`
    console.log(index); `O index se refere a posição dos itens na lista -- EX: (0, 1, 2, 3)`

})


// (Reduce) = O reduce busca reduzir um array ==========

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(acumulador); // <= total ate o momento (total  em relação ao looping atual dentro do array)
    console.log(numero); // <= valor atual
    console.log(indice); // <= index atual
    console.log(original); // array original 

    return acumulador += numero; // retornando o valor acumulado mais o numero atual

})

console.log(`Total do Reduce ${total}`);