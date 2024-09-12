let listElement = document.querySelector("#app ul");
let inpuElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // chamando as informações do nosso localStorage ou não se o array estiver vazio

function renderTarefas(){
    listElement.innerHTML = ""; // Atribuindo um valor vazio a nossa <ul>

    tarefas.map((taref) => { // mapeando o array e atribuindo um parametro
        let liElement = document.createElement("li"); // criando um elemento de <li> 
        let tarefaText = document.createTextNode(taref); // adicionando um texto a nossa <li> no caso a tarefa 

        let linkElement = document.createElement("a"); // criando um link <a> em nossa <li>
        linkElement.setAttribute("href", "#"); // adicionando um atributo ao nosso link <a> 

        let linkText = document.createTextNode("Excluir"); // criando um texto ao nosso link <a>
        linkElement.appendChild(linkText); // vinculando o texto ao nosso link <a>

        let position = tarefas.indexOf(taref); // criando uma variavel que recebe a possição da tarefa dentro no nosso array

        linkElement.setAttribute("onclick", `deletarTarefa(${position})`); // atribuindo um evento de click ao nosso link <a> e chamando a função de deletar o elemento -
                                                                           // na posição desejada.
        liElement.appendChild(tarefaText); //vinculando o texto a nossa <li>
        liElement.appendChild(linkElement);//vinculando o nosso link <a> a nossa <li>
        listElement.appendChild(liElement);//vinculando nossa <li> a nossa <ul>

    })
}

renderTarefas(); // mostrando a lista na tela assim que abrir 

function adicionarTarefa(){
    if(inpuElement.value == ''){ // Verificando as informações do input
        alert("Digite alguma tarefa!");
        return false; // Se input estiver vazio, fazer o alert e fechar a seção
    } else {
        let novaTarefa = inpuElement.value; // atribuindo o valor do input na nova variavel

        tarefas.push(novaTarefa); // atribuindo a tarefa no array 
        inpuElement.value = ""; // limpando o input depois da criação da tarefa 

        renderTarefas(); // chamando a função de renderizar a tarefa na tela
        salvarDados(); // salvando os dados no localStorage
    }
}

buttonElement.onclick = adicionarTarefa;

function deletarTarefa(position){
    tarefas.splice(position, 1);// achando a tarefa clicada na tela pela posição e deletando a mesma de dentro do array com o splice

    renderTarefas(); //renderizando novamente a tela agora sem a tarefa deletada
    salvarDados(); // salvando a alteração no localStorage
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)); //salvando o array desconstruido com o hak do JSON.stringify no localStorage
}