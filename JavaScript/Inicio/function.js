//Funções------------------------------------

// var area = document.getElementById('area');

// function entrar(){
//     var nome = prompt("Digite seu nome!")

//     if(nome === '' || nome === null) {
//         alert("Ops! algo deu errado!")

//         area.innerHTML = "Clique no botão para acessar...";
//     } else {
//         area.innerHTML = "Bem Vindo " + nome + "! ";

//         let botaoSair = document.createElement("button");
//         botaoSair.innerHTML = "Sair da conta";
//         botaoSair.onclick = sair;

//         area.appendChild(botaoSair);
//     }

// }

// function sair() {
//     alert("Até mais!");
//     area.innerHTML = "Você saiu da conta!";
// }

// function mediaAluno(nota1, nota2) {
//     var media = ( nota1 + nota2) / 2;

//     if(media >= 7){
//         console.log("Aluno aprovado coma a media: " + media);

//     } else if(media < 7){
//         console.log("Aluno reprovado com media: " + media);
//     }
// }


// function aluno(nome, curso) {
//     var msg = `Seja bem vindo ${nome} ao curso de ${curso}`;

//     console.log(msg);
// }

//Array----------------------------------------

// let lista = ['Vini', 'Jose', 'Theo', 'Matheus', 13];

// --Adiciona um elemento a lista -- lista.push("Renato")

// -- Subistitui o valor do elemento indicado -- lista[0] = 'Renato'


//Loops---------------------------------------


//while = enquanto
// var x = 0;

// while(x <= 10){
//     document.write("<br> O valor do x é: " + x);

//     //incrementando o contador (+1)
//     x++
// }

//---------------------------------------------------

//for = para

// var valor = 30;

// for(i = 0; i <= valor; i++){
//     document.write("<br> Valor do i é: " + i);
// }

//---------------------------------------------------

//Switch

// function pedir(){
//    var valor = prompt("Digite o valor referente ao produto!");

//    switch(Number(valor)) {
//     case 1:
//         res.innerHTML = "<br> Você escolheu Suco!";
//         break;
//     case 2:
//         res.innerHTML = "<br> Você escolheu Agua!";
//         break;
//     case 3:
//         res.innerHTML = "<br> Você escolheu Cerveja!";
//         break;
//     case 4:
//         res.innerHTML = "<br> Você escolheu Cachaça!";
//         break;
//     default:
//         res.innerHTML = "<br> Valor valido de 1 a 4";
//         break;
//    }

// }

// function enviar() {
//     var valor = Number(prompt("Digite um valor"));

//     var sinal = valor % 2

//     if(valor >= 0 && sinal == 0){
//        res.innerHTML = ( valor + " O Valor é Positivo e o Numero é Par!"); 
       

//     } else if(valor >= 0 && sinal != 0) {
//         res.innerHTML = ( valor + " O Valor é Positivo e o Numero é Impar!"); 
        

//     } else if(valor < 0 && sinal == 0){
//         res.innerHTML = ( valor + " O Valor é Negativo e o Numero é Par!"); 


//     }else if(valor < 0 && sinal != 0){
//         res.innerHTML = ( valor + " O Valor é Negativo e o Numero é Impar!");

//     }

    
// }

//-------------------------------------------------

//Calculadora IMC -------------------------------
var peso;
var altura;
var imc;
var res = document.getElementById('res');

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if(imc < 17){
        res.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Cuidado você esta muito abaixo do peso! ideal`;

    } else if(imc > 17 && imc <= 18.49){
        res.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você esta muito abaixo do peso! ideal`;

    } else if(imc > 18.50 && imc <= 24.99){
        res.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você esta no peso ideal!`;

    } else if(imc > 25 && imc <= 29.99){
        res.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você esta acima do peso ideal!`;

    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';


}
 