function exercicio2(){
    vetor = []
    entrada(vetor)
    console.log(`A média dos salarios: ${mediaSalario(vetor)}`)
    console.log(`Média dos filhos: ${mediaFilhos(vetor)}`)
    console.log(`O maior salário: ${maiorSalario(vetor)}`)
    percentualMulheres(vetor)
    mostrar(vetor)
}

function entrada(vetor){
    for (let i = 0; i < 3; i ++){
        let objHabitantes = {
            sexo: prompt(`Informe o seu sexo: M ou F `).toUpperCase(),
            salario: Number(prompt(`Informe o salário: `)),
            idade: Number(prompt(`Informe a idade: `)),
            filhos: Number(prompt(`Informe a quantidade de filhos: `))
        }
        vetor.push(objHabitantes) 
    }   
}

function mediaSalario(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma = vetor[i].salario + soma
    }
    return soma / vetor.length
}

function mediaFilhos(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma = vetor[i].filhos + soma 
    }
    return soma / vetor.length
}

function maiorSalario(vetor){
    let maiorSalario = vetor[0].salario
    for (let i = 1; i < vetor.length; i++){
        if (vetor[i].salario > maiorSalario){
            maiorSalario = vetor[i].salario
        }
    }
    return maiorSalario 
}

function percentualMulheres(vetor){
    let conta = 0
    let cont = 0
    for (let i = 0; i < 3; i++){
        if (vetor[i].sexo == 'F' || vetor[i].salario > 1000){
            conta++
            cont++
        }
    }
    console.log(`O percentual de mulheres com salarios > 1000: ${(conta/cont)*100}`)
}

function mostrar(vetor){
    console.log(vetor)
}




