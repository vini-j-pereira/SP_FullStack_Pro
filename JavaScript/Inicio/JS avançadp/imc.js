// Calculadora IMC:

/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acima do peso
*/

// peso / (altura*altura);

let peso;
let altura;
let imc;
let resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2).replace('.' , ',')} <br> Cuidado você esta muito abaixo do peso!`;

    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2).replace('.' , ',')} <br> Você esta abaixo do peso ideal!`;

    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2).replace('.' , ',')} <br> Você esta no peso ideal!`;

    }else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2).replace('.' , ',')} <br> Você esta acima do peso!`;

    }else if( imc >= 30){
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2).replace('.' , ',')} <br> Você esta obeso, procure ajuda medica!`;
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}