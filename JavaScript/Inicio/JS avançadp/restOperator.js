//(Rest Operator):

`Para aplicar o Rest Operator basta adicionar os 3 pontos antes do paramentro, Ex:(...nomes)`

function convidados(...nomes){ //<----- o Rest Operator serve para quando não sabemos o numero de parametros vamos receber na função.
    console.log("Nomes na lista:") //   esses parametros serão tratados com uma (Lista), (Array).
    console.log(nomes);
}

convidados("Vinicius", "José", "Maria");


//=============================================

function sorteador(...numeros){ `(Math = operador matematico) | (floor = para gerar numeros inteiros) | (random = para sortear os numeros)`

    const numerosGerado = Math.floor(Math.random() * numeros.length); ` <----(length = para percorrer toda a lista)`
    console.log(numerosGerado);`<--- se refere ao posição`
    console.log(numeros[numerosGerado]); `<---- Agora teremos o numero real e não a sua posição `

}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);

`O numero gerado no sorteio se refere a posição do paramentro dentro da lista e não o numero propriamente`
`Ex: foi gerado o numero 0 ele se refera a posição (0) = numero (1)`