function calcular(){
    let qtd = Number (document.getElementById("qtd").value)
    let cod = Number (document.getElementById("cod").value)
    let unitario, total, desconto, final
    let erro = false

    if(cod >= 1 && cod <= 10){
        unitario = 10
    }
    else if(cod >= 11 && cod <= 20){
        unitario = 15
    }
    else if(cod >= 21 && cod <= 30){
        unitario = 20
    } 
    else if(cod >= 31 && cod <= 40){
        unitario = 30
    }
    else{
        erro = true
    }
    // valor total
    // (!erro) = if not erro
    if (!erro){     
        total = unitario * qtd
        if(total < 250){
            desconto = (total/100) * 5
        }
        else if(total >= 250 && total < 500){
            desconto = (total/100) * 10
        }
        else if(total >= 500){
            desconto = (total/100) * 15
        }
    // calcular valor final
        final = total - desconto
        document.getElementById("final").innerHTML = `Unitario: ${unitario} </br> 
        Total: ${total} </br> 
        Desconto: ${desconto} </br>
        Final: ${final}`
    }
    else{
        document.getElementById("final").innerHTML = `erro`
    }



}