function calcularExe4(){
    let valores = []
    let posicao = []
    let erro = false

    for(let i = 0; i < 10; i++){
        valores.push(Number(prompt(`Digite o ${i}º valor: `)))
        if (valores[i] == 30){
         posicao.push(i)
        }
    }

    if (posicao.length == 0){
        alert(`Não existe número 30 `)
    } 
    else {
    alert(`As posições em que aparece o número 30 aparece são: ${posicao}`)
    }

}