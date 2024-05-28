let maisGol = document.getElementById("maisGol");
let menosGol = document.getElementById("MenosGol");
let gols = document.getElementById("gols")
let numeroDeGols = Number(0);

function adicionarGols(){

        numeroDeGols += 1;
        gols.innerHTML = numeroDeGols
   

    
}

function removerGols(){

    if(numeroDeGols > 0){

        numeroDeGols -= 1
        gols.innerHTML = numeroDeGols
    }
    else{
      
      alert('Numero de gols não pode ser inferior a zero!')
      
    }

    

}