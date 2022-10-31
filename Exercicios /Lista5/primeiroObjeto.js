function primeiroObjeto(){
    let vetor = []

    for (let i = 0; i < 3; i ++){
        let objVendedor = {
            nome: String(prompt(`Informe o nome do vendedor ${i+1}: `)),
            vendas: Number(prompt(`Digite o total de vendas do vendedor: `)),
            comissao: Number(prompt(`Informe a comissão do vendedor: `)),
            receber: 0
        }
        // adiciona o objeto no vetor
        vetor.push(objVendedor)
    }

    // calcula valores a receber e o total de vendas
    let total = 0
    for (let i = 0; i < 3; i++){    
        vetor[i].receber = (vetor[i].vendas * vetor[i].comissao) / 100
        total += vetor[i].vendas
    }   
    
    // calcular menor e maior
    let maiorValor = vetor[0].receber
    let maiorNome = vetor[0].nome
    let menorValor = vetor[0].receber
    let menorNome =  vetor[0].nome

    for (let i = 0; i < 3; i++){
        if (vetor[i].receber > maiorValor){
            maiorValor = vetor[i].receber
            maiorNome = vetor[i].nome
        }
        if (vetor[i].receber < menorValor){
            menorValor = vetor[i].receber
            menorNome = vetor[i].nome
        }
    }

    for (let i = 0; i < 3; i++){
        console.log(`Vendedor ${vetor[i].nome} receberá: $${vetor[i].receber} `)
    }

    console.log(`Total de vendas: ${total}`)
    console.log(`Maior valor a receber: ${maiorValor} recebido por ${maiorNome}`)
    console.log(`Menor valor a receber: ${menorValor} recebido por ${menorNome}`)
}