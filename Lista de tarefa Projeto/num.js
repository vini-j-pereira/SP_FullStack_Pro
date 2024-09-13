inputNum = document.querySelectorAll("#app input");
btnNum = document.querySelector("#app button");
ulNum = document.querySelector("#app ul");

let listaNum = [];


function calcularNum() {
    let numero = Number(inputNum.value)
    console.log(numero)
    
}

btnNum.onclick = calcularNum;
