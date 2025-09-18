const prompt = require("prompt-sync")();

let quartos = []
let alguel = 0;
let nome = []
let email = []

let qtd = parseInt(prompt(" Quantos quartos serao alugados "))

for( let i = 0; i < qtd; i++){
    let quarto = Number(prompt("qual o nomuero de quato que vc deseja"))
    console.log("aluguel #"+(i+1))
    quartos.push(prompt("qual quarto vc deseja se hospeda "))
    while(ocupado(quarto)){
        console.log("ja tem um gente ai")
        quarto = Number(prompt("escolha outro numero de quarto  "))
    }
    quartos.push(quarto)
     nome.push(prompt("QUal o seu nome para o cadastro do aluguel "))
     email.push(prompt("Digite seu email "))
     
  


    




     console.log(`Nome: ${nome[i]}, quarto: ${quartos[i]}, email: ${email[i]}`)
}


function ocupado(quarto){
    for(let i = 0; i<qtd;i++){
        if(quartos[i]=== quarto){
            return true
        }
    }
    return false
}