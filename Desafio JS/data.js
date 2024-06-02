 let hoje = new Date();

 let dia = `<br>Dia: ${hoje.getDate()}<br>`;
 let mes = `Mês: ${hoje.getMonth()+1}<br>`;
 let ano = `Ano: ${hoje.getFullYear()}<br>`;

 document.write(hoje);
 document.write(dia);
 document.write(mes);
 document.write(ano);