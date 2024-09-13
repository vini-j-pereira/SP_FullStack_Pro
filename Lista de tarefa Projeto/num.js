inputNum = document.querySelector("#app input");
btnNum = document.querySelector("#app button");
ulNum = document.querySelector("#app ul");

let listaNum = [];

function renderNum() {
    ulNum.innerHTML = "";

    listaNum.map((numDaLista) => {
        let liElement = document.createElement("li");
        let numDescri = document.createTextNode(numDaLista);

        let linkNum = document.createElement("a");
        linkNum.setAttribute("href", "#");
        let numText = document.createTextNode("Deletar");
        linkNum.appendChild(numText);

        let position = listaNum.indexOf(numDaLista);

        linkNum.setAttribute('onclick', `deletarNum(${position})`);

        liElement.appendChild(numDescri);
        liElement.appendChild(linkNum);
        ulNum.appendChild(liElement)
    })
}


function calcularNum() {

    if(inputNum.value == ''){
        alert("Digite um numero!")
        return false;

    } else {
        let numero = Number(inputNum.value);
        listaNum.push(numero);

        inputNum.value = "";

        renderNum();
    }   
}

btnNum.onclick = calcularNum;

function deletarNum(position) {
    listaNum.splice(position, 1);

    renderNum();
}
