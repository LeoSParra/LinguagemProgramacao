function exercicio3(){
    let vetor = []

    for (let i = 0; i < 3; i++){
        let objCaracteristicas = {
                sexo: prompt(`Digite M - masculino e F - feminino: `).toUpperCase(),
                altura: Number(prompt(`Informe a altura da pessoa: `)),
                idade: Number(prompt(`Informe a idade: `)),
                olhos: prompt(`Informe a cor dos olhos A - azul, V - verde, C - castanho: `).toUpperCase()
        }
        vetor.push(objCaracteristicas)
    }
    // media de pessoas...
    let media = 0
    let somaIdade = 0  
    let contadorIdade = 0
    for (let i = 0; i < 3; i++){
        if (vetor[i].altura > 1.60 && vetor.olhos == 'C'){
            somaIdade += vetor[i].idade
            contadorIdade++
        }
    }
    media = somaIdade/contadorIdade
    console.log(`A média é: ${media}`)
    // maior idade dos informados
    let maiorIdade = vetor[0].idade
    for (let i = 0; i < 3; i ++){
        if (vetor[i].idade >maiorIdade){
            maiorIdade = vetor[i]
        }
    }
    console.log(`A maior das idades é: ${maiorIdade}`)
    // a quantidade de sexo feminino...
    qtdFeminino = 0
    for (let i = 0; i < 3; i++){
        if (vetor[i].sexo == 'F'){   
            if ((vetor[i].idade >= 20 && vetor[i].idade <= 45) || (vetor[i].olhos == 'V' && vetor[i].altura < 1.70)){
            qtdFeminino++
            }
        }
    }
    console.log(`Quantidade de sexo feminino: ${qtdFeminino}`)
    // percentual de homens
    qtdHomens = 0
    for (let i = 0; i < 3; i++){
        if (vetor[i.sexo == 'M']){
            qtdHomens++
        }
    }
    console.log(`% de homens: ${(qtdHomens/5)*100}`)





    
}