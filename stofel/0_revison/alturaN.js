const prompt = require("prompt-sync")();

let pessoas = (prompt("quantas pessoas vc quer cadastrar "))
let alturas = []
let media = 0

for(let i = 0; i < pessoas; i++){
 let n = Number(prompt("Qual sua altura "))
 alturas.push(n)
}
for(let i = 0; i < pessoas; i++){
    media = media + alturas[i]
    var medias = media/pessoas
    }
    


console.log("as alturas que vc escolheu "+ alturas +"e a media é "+medias)

