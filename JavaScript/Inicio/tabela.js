let maisGol = document.getElementById("maisGol");
let menosGol = document.getElementById("MenosGol");
let gols = document.getElementById("gols")
let numeroDeGols = Number(0);

function adicionarGols(){

        gols.innerHTML = numeroDeGols++ 
   

    
}

function removerGols(){


    if(numeroDeGols < 0){
        alert('Gols não podem ser inferior a zero!')
    }
    else{
      gols.innerHTML = numeroDeGols--  
    }

    

}