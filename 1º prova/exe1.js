function calcularExe1(){
    let v1=0,v2=0,v3=0,v4=0,v5=0
    let opcao, cont
    let aux

    do{
        cont++
        opcao = Number(prompt(`Digite o código
        1 - tudo
        2 - quase tudo
        3 - bastante
        4 - pouco
        5 - tanto faz`))
        
        switch(opcao){
            case 1: v1++
                break
            case 2: v2++
                break
            case 3: v3++
                break
            case 4: v4++
                break
            case 5: v5++
                break
            case 0: 
                alert(`Você saiu do programa`)
                break
            default:
                alert(`Erro no código, tente novamente.`)
                break    
        }
    }while(opcao != 0)


    for(let i = 0; i < 4; i++){
        if(v1 > v2){
            aux = v1
            v1 = v2
            v2 = aux
        }
        if(v2 > v3){
            aux = v2
            v2 = v3
            v3 = aux
        }
        if(v3 > v4){
            aux = v3
            v3 = v4
            v4 = aux
        }
        if(v4 > v5){
            aux = v4
            v4 = v5
            v5 = aux
        }
    }   
    document.getElementById("resultado").innerHTML = `qtd tudo: ${v1} </br>
        qtd quase tudo ${v2} </br>
        bastante ${v3} </br>
        pouco ${v4} </br> 
        tanto faz ${v5} </br>
        porcentagem em cima do tanto faz: ${((v5*100) / cont - 1).toFixed(2)} </br>
        a ordem crescente: ${v1} - ${v2} - ${v3} - ${v4} - ${v5}`
}