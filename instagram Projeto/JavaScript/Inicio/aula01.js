// let nome = prompt('Qual o seu nome?');

// document.write(`Bem vindo ao projeto ${nome}`);
let area = document.getElementById('area');



function entrar(){
    let nome = prompt('Digite seu nome:');

    if( nome === '' || nome === null){

        alert(`Algo de errado!`);
        area.innerHTML = 'Algo deu errado, clique no botão para continuar...';

    }else{
        area.innerHTML = ` Bem vindo meu caro amigo ${nome}!`;
    }
    
}