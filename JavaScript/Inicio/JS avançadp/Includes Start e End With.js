// (Includes) ==============

let nomes = ["Vinicius", "Jose", "Maria", "Rosana"];

console.log(nomes.includes("Rosana")); `<----- Este metodo serve para verificar se algum item se encontra dentro do array.`

if(nomes.includes("Rosana")) {
    console.log("Nome esta na lista!");
} else {
    console.log("Nome não esta na lista!");
}

//(StartWith)==========================================
`Este metodo busca intens dentro do array onde o inicio da item é o criterio da busca. Ex:`

let nome = ["Matheus", "Theo", "Vinicius"];

console.log(nome.startsWith("Th")); `<------- Nesse caso o Th sera procurado dentro dos arrays.`

//(EndsWith)===========================================

`Este metodo é o inverso do (startsWith) onde o que ele busca são os caracteres finas dos itens. Ex:`

console.log(nome.endsWith("ius")); `<------ aqui ele nos retornara somente itens que terminem com esses caracteres.`