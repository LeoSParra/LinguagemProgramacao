function calcularExe6(){
    let vendas = []
    let comissao = []
    let nome = []

    for (let i = 0; i < 5; i ++){
        nome.push(String(prompt(`Digite o ${i+1}º nome dos vendedores: `)))
        vendas.push(Number(prompt(`Digite o total de vendas do vendedor ${nome[i]}: `)))
        comissao.push(Number(prompt(`Informe a comissão do vendedor ${nome[i]}: `)))
    }

    //relatórios
    //calcular valores a receber
    let receber = []
    let soma = 0
    for (let i = 0; i < 5; i++){
        receber.push((vendas[i] * comissao[i]) /100)
        soma += vendas[i]
    }   

    let maiorValor = receber[0]
    let menorValor = receber[0]
    let maiorNome = nome[0]
    let menorNome = nome[0]

    //calculo do maior e menor valor a receber e quem os recebera
    for (let i = 0; i < 5; i++){
        if (receber[i] > maiorValor){
            maiorValor = receber[i]
            maiorNome = nome[i]
        }
        if (receber[i] < menorValor){
            menorValor = receber[i]
            menorNome = nome[i]
        }
    }

    for (let i = 0; i < 5; i++){
        console.log(`Vendedor ${nome[i]} receberá ${receber[i]}$ `)
    }

    console.log(`Total de vendas: ${soma}`)
    console.log(`Maior valor a receber ${maiorValor} recebido por ${maiorNome}`)
    console.log(`Menor valor a receber ${menorValor} recebido por ${menorNome}`)
                   


}