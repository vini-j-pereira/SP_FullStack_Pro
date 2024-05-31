//Lista de Tarefa - Projeto

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = '';

    tarefas.map((todo) => {
        let litElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

        litElement.appendChild(tarefaText);
        litElement.appendChild(linkElement);
        listElement.appendChild(litElement);

    });
}

function adicionarTarefas(){

    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");
        return false;

    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
    }
}

btnElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
}