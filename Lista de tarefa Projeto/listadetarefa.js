//Lista de Tarefa - Projeto

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

let tarefas = [];

function adicionarTarefas(){

    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");
        return false;

    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';
    }
}

btnElement.onclick = adicionarTarefas;