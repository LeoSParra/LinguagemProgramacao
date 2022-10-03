function calcularExe6(){
    let cod 
    let valor = 0
    let total = 0, aux = 0, aux2 = 0
    let vista = 0
    let prazo = 0
    let erro = false

    for(let i = 0; i < 15; i++){
        cod = String (prompt("Digite o código: V ou P "))
        valor = Number (prompt("Digite os valores: "))

        total = vista + prazo

        if(cod == 'V' || cod == 'v'){   
            vista = vista + valor
        }
        else if(cod == 'P' || cod == 'p'){
            prazo = prazo + valor
            aux = valor / 3
            aux2 = aux + aux2
        }
        else{
            erro = true
        }
    }
    if(erro){
        alert("Erro na digitação dos valores ")
    }
    else{
        document.getElementById("resultado").innerHTML = `Valor total das compras a vista: ${vista} </br>
        Valor total das compras a prazo ${prazo} </br>
        Valor total das compras efetuadas ${total} </br>
        Valor transações a prazo ${aux2.toFixed(2)}`
    }
}