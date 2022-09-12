function calcularExe2(){
    const despesa = 200
    let lucro
    let qtde = 120
    let maiorLucro = 0

    for(let preco = 5; preco >= 1; preco = preco - 0.5){
        lucro = (preco * qtde) - despesa
        if(lucro > maiorLucro){
            maiorLucro = lucro

        }
        console.log(`lucro: ${lucro} com preço a ${preco} e quantidade ${qtde}`)
        qtde = qtde + 26
    }
    console.log(`Maior lucro ${maiorLucro}`)
}