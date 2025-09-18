const prompt = require("prompt-sync")();

let nomes = []
let generos = []
let notas = []

nomes.push("GOW III")
generos.push("Aventura")
notas.push(9)

nomes.push("Valorant")
generos.push("Fps")
notas.push(0)

nomes.push("skate.")
generos.push("Mundo Abridos")
notas.push(10)



for (let i = 0; i< nomes.length; i++){
    console.log(`Nome: ${nomes[i]}, Genero: ${generos[i]}, noetas: ${notas[i]}`)
}