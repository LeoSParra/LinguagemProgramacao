function calcular(){

    let peso = Number(document.getElementById("peso").value)
    let idade = Number(document.getElementById("idade").value)
    //calcular o grupo de risco
    let grupo
    let erro = false

    if(idade >=0 && idade < 20){
        if(peso >= 0 && grupo <= 60){
            grupo = 9
        }
        else if(peso > 60 && peso <=90){
            grupo = 8
        }
        else if(peso > 90){
            grupo = 7
        }
        else{
            erro = true //entrada invalida de peso
        }
    }
    else if(idade >= 20 && idade <= 50){
        if(peso >= 0 && grupo <= 60){
            grupo = 6
        }
        else if(peso > 60 && peso <=90){
            grupo = 5
        }
        else if(peso > 90){
            grupo = 4
        }
        else{
            erro = true //entrada invalida de peso
        }
    }
    else if(idade > 50){
        if(peso >= 0 && grupo <= 60){
            grupo = 3
        }
        else if(peso > 60 && peso <=90){
            grupo = 2
        }
        else if(peso > 90){
            grupo = 1
        }
        else{
            erro = true //entrada invalida de peso
        }
    }
    else{
        erro = true // entrada inválida da idade
    }
    if(erro){   
        document.getElementById("grupo").innerHTML = `Idade e/ou peso invalidos`
    }
    else{
    document.getElementById("grupo").innerHTML = `Você pertence ao grupo de risco: ${grupo} `
    }

}