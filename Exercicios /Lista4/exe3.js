function calcularExe3() {
    let produto = [], estoque = []

    for (let i = 0; i < 10; i++) {
        produto.push(Number(prompt(`Digite o código do produto: `)))
        estoque.push(Number(prompt(`Informe a quantidade do produto em estoque: `)))
    }

    let cliente = Number(prompt(`Informe cliente: `))
    do {
        let cod = Number(prompt(`Informe o código do produto desejado: `))
        let quantidade = Number(prompt(`Informe a quantidade desejada: `))
        //verificar se o produto existe
        let achou = false

        for (let i = 0; i < produto.length; i++) {
            if (produto[i] == cod) {
                //achamos o produto, verificamos o estoque
                if (estoque[i] >= quantidade) {
                    //tem estoque suficiente
                    estoque[i] = estoque[i] - quantidade //atualiza estoque
                }
                else {
                    alert(`Estoque insuficiente`)
                }
            }
        }
        //not achou
        if (!achou) {
            console.log(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe novo cliente: 0 para encerrar`))

    }while (cliente != 0)

    console.log(produto)
    console.log(estoque)

}