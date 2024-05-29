// Switch

function pedir() {
    let valor = prompt('Faça o seu pedido escolha de 1 a 4.');

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco");
            break;
        case 2:
            alert("Você escolheu 2 = Agua");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você escolheu 4 = Chamar o garçom");
            break;
        default:
            alert("Só é possivel escolher as opções de 1 a 4!");
            break;
    }
}