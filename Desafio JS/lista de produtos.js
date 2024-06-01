let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

produtos.splice(2, 1);
produtos.splice(1, 1);

let resultado = produtos.filter((item) => {

    if(item === "Computador"){
        console.log(`Esse item existe na lista ${item}`)
    }else{
        console.log(`Esse item não existe na lista.`)
    }

})



document.write(produtos);


