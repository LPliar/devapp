const prompt = require("prompt-sync")()
///veeeeeeeetor vazio?
let nomes = []

// inserir um nome no vetor

nomes.push("bolsonaro")

//mossssssssstrar o nome no vetooooooooooooooooooooooooooooooooooooooooooooor

console.log(nomes[0])
let myjames = prompt("digite um jogo ruim")
// vetor com coisas
let james = ["gta 7", "valorant", "cs", "warzone", "fortnite", "minecraft", "bo7", "free fire","rl"]
james.push = ("Rocketlag")
let real = false

for (let i = 0; i < james.length; i++){
    if (james[i] == myjames){
        real = true
        break
    }

}
if(real == true){
    console.log("james is real")
}
else{
    james.push(myjames)
}
console.log(james)
//////////// remover item e uma posicao (index) expecific
james.splice(1,1)
console.log(james)