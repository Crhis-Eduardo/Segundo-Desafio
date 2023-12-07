//numA = vitorias | numB derrotas

let personagem = "Perebas"
let resultado = subtração (250, 100)

function subtração (numA, numB){
	let subtração = numA - numB
    return subtração
    }
    if (resultado >=0 && resultado <= 10){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Ferro")
    }
    else if (resultado >10 && resultado <= 20){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Bronze")
     }
      else if (resultado >20 && resultado <= 50){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Prata")
     }
        else if (resultado >50 && resultado <= 80){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Ouro")
     }
        else if (resultado >80 && resultado <= 90){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Diamante")
     }
        else if (resultado >90 && resultado <= 100){
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Lendário")
     }
        else if (resultado >=100)
    console.log ("O Herói " + personagem + " tem " + resultado + " vitórias e está no ranking Imortal")