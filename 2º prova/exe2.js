function exercicio2(){
    vetor = []
    vetor2 = []
    entradaPessoas(vetor, vetor2)
    entradaImoveis(vetor, vetor2)
    mostrarValor(vetor, vetor2)
    maiorCpf(vetor, vetor2)
}

function entradaPessoas(vetor, vetor2){
    for (let i = 0; i < 3; i++){
        let objPessoas = {
            nome: prompt(`Digite o nome: `),
            rg: Number(prompt(`Digite o rg: `)),
            cpf: Number(prompt(`Digite o cpf: `))
        }
        vetor.push(objPessoas)
    }
}

function entradaImoveis(vetor, vetor2){
    for (let i = 0; i < 3; i ++){
        let objImoveis = {
            codigo: Number(prompt(`Informe o código do imóvel:`)),
            endereco: Number(prompt(`Informe seu endereço: `)),
            tamanho: Number(prompt(`Informe o tamanho do imóvel: `)),
            tipo: prompt(`Informe o tipo do imóvel: `),
            valor: Number(prompt(`Informe o valor:`)),
            cpfDono: Number(prompt(`Insira o cpf: `))
        }
        vetor2.push(objImoveis)
    }           
}

function mostrarValor(vetor, vetor2){
    let informe = Number(prompt(`Informe o seu rg: `))
    for (let i = 0; i < 3; i++){
        if (informe == vetor[i].rg){
            prompt(`O valor do imóvel dessa pessoa é: ${vetor2[i].valor} e seu nome é: ${vetor[i].nome}`)
        } else {
            alert(`RG inválido `)
        }
    }
}

function maiorCpf(vetor, vetor2){
    maiorNome = vetor[0].nome
    maiorValor = vetor2[0].valor
    for (let i = 0; i < 3; i++){
        if (vetor[i].valor > maiorValor){
            maiorValor = vetor[i].valor
            maiorNome = vetor[i].nome 
        }
    }
    console.log(`O maior valor é de: ${maiorValor} e o nome da pessoa é: ${maiorNome}`)
}