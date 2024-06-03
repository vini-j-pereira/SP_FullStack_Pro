
let numero = Number(prompt("Digite um numero"));

function numeroPosNeg () {
    if(numero > 0){
        alert(`${numero} é POSITIVO!`);

    } else if(numero == 0){
        alert("Numero é igual a 0.");

    }else if(numero < 0){
        alert(`${numero} é NEGATIVO!`);
    }

}

numeroPosNeg();