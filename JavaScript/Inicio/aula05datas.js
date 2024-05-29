// Data do meu local PC
let data = new Date();

data.getHours();

data.getMinutes();

data.getSeconds();

data.getMilliseconds();

// Data Manipulada

let datanova = new Date("March 10, 2018");

// Criar estilo de data

datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear();

// Somar data, mês, ano, hora:
datanova.setDate(datanova.getDate()+5);