function calcular(){
    let altura, peso, idade
    let qtd1=0, qtd2=0, qtd3=0
    let somaAltura = 0, cont = 0
    let media = 0

    for(let i = 0; i < 4; i++){
        idade = Number(prompt("Digite a idade"))
        altura = Number(prompt("Digite a altura"))
        peso = Number(prompt("Digite o peso"))
        cont = cont + 1

        if(idade > 50 ){
            qtd1 += 1
        }
        else if(idade >= 10 && idade <= 20){
            somaAltura = somaAltura + altura
            qtd2 += 1 
        }
        if(peso >= 0 && peso < 40){
            qtd3 += 1
        }
        console.log(qtd3)
    }
    document.getElementById("resultado").innerHTML = `Quantidade de pessoas acima de 50 anos é: ${qtd1} </br>
    A média das alturas entre pessoas de 10 a 20 é: ${(somaAltura/qtd2).toFixed(2)} </br>
    A porcentagem de pessoas com peso inferior a 40kg: ${(qtd3*100) / cont}%`
}   