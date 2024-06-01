//(Map) = Percorre todo o array ==========

let lista = ["Vinicius", "Jose", "Renato", "Carol"];

lista.map((item, index) => {

    console.log(item); `O item é o conteudo da lista -- EX:(Vinicius, jose, Renato, Carol)`
    console.log(index); `O index se refere a posição dos itens na lista -- EX: (0, 1, 2, 3)`

})


// (Reduce) = O reduce busca reduzir um array ==========

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(acumulador);
    console.log(numero);
    console.log(indice);
    console.log(original);

    return acumulador += numero;

})

console.log(`Total do Reduce ${total}`);