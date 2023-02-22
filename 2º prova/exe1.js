function exercicio1(){
    let matriz =[]
    let vetor = []
    leitura(vetor, matriz)
    mediaNotas(vetor, matriz)
    menorNota(vetor, matriz)
}

function leitura(vetor, matriz){
    for (let i = 0; i < 4; i++){
        vetor.push(prompt(`Informe o ${i+1}º carro: `))
        matriz[i] = [] 
        for (let j = 0; j < 5; j++){
            matriz[i][j] = Number(prompt(`Informe a ${j+1}º nota do carro: `))
        }
    }
}

function mediaNotas(vetor, matriz){
    let soma    
    let media = 0
    let menorMedia = 11
    for (let i = 0; i < 4; i++){
        soma = 0
        for (let j = 0;j < 5; j++){
            soma += matriz[i][j]
        }

        media = soma / matriz[i].length
        if (media < menorMedia){
            menorMedia = media
        }
        console.log(`A média de notas do carro ${vetor[i]} é de ${media}`)
    }
    console.log(`A menor média é: ${menorMedia}`)
}

function menorNota(vetor, matriz){
    let menor = matriz[0][0]
    let menorNome = vetor[0]
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 5; j++){
            if (matriz[i][j] < menor){
                menor = matriz[i][j]
                menorNome = vetor[i]
            }
        }
    }
    console.log(`O carro com menor nota é ${menorNome} e sua nota é ${menor}`)
}
