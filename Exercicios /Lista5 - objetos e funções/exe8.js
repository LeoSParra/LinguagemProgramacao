function exercicio8(){
    let vetor = []
    criarObj(vetor)
    calculaIndiceAcidentes(vetor)
    calcularMaiorMenorIndiceAcidentes(vetor)
    calcularMediaAcidentes(vetor)
    calcularPercentualVeiculos(vetor)
    mostrar(vetor)
}    

function criarObj(vetor){
    for (let i = 0; i < 3; i++){
        let objAcidentes = {
            nome: String(prompt(`Informe o estado: `)),
            veiculos: Number(prompt(`Informe o número de veículos que circulam nesse estado: `)),
            acidentes: Number(prompt(`Informe o número de acidentes de trânsito: `)),
            cidades: Number(prompt(`Informe quantidade de cidades do estado: `)),
            indice: 0,
            percentual: 0,
            mediaAcidentes: 0
        }
        vetor.push(objAcidentes)
    }
}

function calculaIndiceAcidentes(vetor){    
    // calcular índice de acidentes
    for (let i = 0; i < 3; i++){
        vetor[i].indice = (vetor[i].acidentes / vetor[i].veiculos) * 100
    } 
}    

function calcularMaiorMenorIndiceAcidentes(vetor){
    // calcular maior e menor
    let maiorIndice = vetor[0].indice
    let maiorNome = vetor[0].nome
    let menorIndice = vetor[0].indice
    let menorNome = vetor[0].nome

    for (let i = 1 ; i < 3; i++){
        if (vetor[i].indice > maiorIndice){
            maiorIndice = vetor[i].indice
            maiorNome = vetor[i].nome
        }
        if (vetor[i].indice < menorIndice){
            menorIndice = vetor[i].indice
            menorNome = vetor[i].nome
        }
    }
    console.log(`Maior índice de acidentes ${maiorIndice} do estado  ${maiorNome}`)
    console.log(`Menor índice de acidentes ${menorIndice} do estado ${menorNome}`)

}

function calcularMediaAcidentes(vetor){
    for (let i = 0; i < 3; i++){
        vetor[i].mediaAcidentes = vetor[i].acidentes / vetor[i].cidades
    }

}

function calcularPercentualVeiculos(vetor){
    // calcular percentual de veiculos
    let somaVeiculos = 0 
    for (let i = 0; i < 3; i++){
        somaVeiculos = somaVeiculos + vetor[i].veiculos
    }
    for (let i = 0; i < 3; i++){
        vetor[i].percentual = (vetor[i].veiculos / somaVeiculos) * 100
    }       
}

function mostrar(vetor){
    console.log(`Resultado final do vetor `)
    console.log(vetor)
}

