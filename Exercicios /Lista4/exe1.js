function calcularExe1(){

    //declara o vetor idades
    let idades = []

    //entrada de dados
    for(let i = 0; i < 4; i++){ 
        idades.push(Number(prompt(`Digite a ${i+1}º idade: `)))
    }   
    //processamento
    let pares = []
    let impar = []

    for(let i = 0; i < 4; i++){
        if (idades[i] % 2 == 0){
            pares.push(idades[i])
        } else {
            impar.push(idades[i])
        }
    }
    //saida
    alert(`A quantidade de pares: ${pares.length} e seus números são ${pares}`)
    alert(`a quantidade de ímpares: ${impar.length} e seus números são ${impar}`)
}