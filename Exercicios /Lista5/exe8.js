function exercicio8(){
    let vetor = []

    for (let i = 0; i < 3; i++){
        let objAcidentes = {
            nomes: String(prompt(`Informe o estado: `)),
            numVeiculos: Number(prompt(`Informe o número de veículos que circulam nesse estado: `)),
            numAcidentes: Number(prompt(`Informe o número de acidentes de trânsito: `)) 
        }
        vetor.push(objAcidentes)
    }

    let maiorAcidentes = vetor[0].numAcidentes
    let maiorNome = vetor[0].nomes
    let menorAcidentes = vetor[0].numAcidentes
    let menorNome = vetor[0].nomes

    for (let i = 0; i < 3; i++){
        if (vetor[i].numAcidentes > maiorAcidentes){
            maiorAcidentes = vetor[i].numAcidentes
            maiorNome = vetor[i].nomes
        }
        if (vetor[i].numAcidentes < menorAcidentes){
            menorAcidentes = vetor[i].numAcidentes
            menorNome = vetor[i].nomes
        }
    }
    console.log(`Maior índice de acidentes: ${maiorAcidentes} do estado:  ${maiorNome}`)
    console.log(`Menor índice de acidentes: ${menorAcidentes} do estado: ${menorNome}`)
}