
function numerosMegaSena (qtdNumeros) {

    if(qtdNumeros < 6 || qtdNumeros > 9){
        console.log("Somente numeros entre 6 e 9!");
        return [];
    }

    const numerosSOrt = [];

    while(numerosSOrt.length < qtdNumeros){

        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

        if(!numerosSOrt.includes(numeroAleatorio)){
            numerosSOrt.push(numeroAleatorio)
        }
    }

    return numerosSOrt;
    
}

const numeroSorteado = numerosMegaSena(6);
console.log(numeroSorteado)