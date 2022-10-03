function calcularExe2(){
    let numero = []

    for(let i = 0; i < 7; i++){
        numero.push(Number(prompt(`Digite o ${i+1}º número: `)))
    }

    let mult2 = []
    let mult3 = []
    let quantidade = []

    for(let i = 0; i < 7; i++){
        if (numero[i] % 2 == 0){
            mult2.push(numero[i])
        }
        if (numero[i] % 3 == 0){
            mult3.push(numero[i])
        }
        if (numero[i] % 3 == 0 && numero[i] % 2 == 0){
            quantidade.push(numero[i])
        }
    }

    alert(`Os números múltiplos de 2 são: ${mult2}
    Os de 3 são: ${mult3}
    Os múltiplos de 2 e 3 são: ${quantidade}`)

}