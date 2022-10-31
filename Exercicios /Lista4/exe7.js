function calcularExe7(){
    let vetor = []
    let negativos = []
    let positivo = 0

    for (let i = 0; i < 10; i++){
        vetor.push(Number(prompt(`Digite o ${i+1}º número: `)))
    }

    for (let i = 0; i < 10; i++){
        if (vetor[i] < 0){
            negativos.push(vetor[i])
        }
        else {
            positivo = positivo + vetor[i]
        }
    }

    alert(`A quantidade de números negativos é: ${negativos.length}. E a soma dos positivos é: ${positivo}`)
}