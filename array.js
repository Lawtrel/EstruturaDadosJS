let dados = new Array()
const nomes = ["Leo","Leandro","Law"] // or new Array("Leo,"24","CPF"); /// Forma direta
dados["nome"] = "L"
dados["idade"] = "24"
dados["cpf"] = "074.842.316-10"


for( let i = 0; i < nomes.length; i++) {
    console.log(`Dados: ${nomes[i]}`)
}

console.log(nomes.length) // Tamanho Vetor
console.log(dados["cpf"]) // Printa o nome que esta no vetor
console.log("nome: ", nomes)// printa em forma em json 


let Alphabet = new Array(["A","B","C","D"]) // add alphabet
console.log(Alphabet)
Alphabet.push("F") // add F final
Alphabet.unshift("Z") // add no inicio
//Alphabet.shift("Z") // Remove no inicio
console.log(Alphabet)

for (let i = 0; i < Alphabet.length; i++) {
    console.log(`Alphabet: ${Alphabet[i]}`)
}


