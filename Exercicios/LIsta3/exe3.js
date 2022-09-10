function porcentagem(x,y){
    return (x*100) / y

}
function calcular(){
    let idade = 0
    let cont = 0
    let erro = false
    let x1=0, x2=0, x3=0, x4=0, x5=0


    for(let i = 0; i < 8; i++){
        idade = Number(prompt("Informe as idades"))
        cont += 1

        if(idade >= 0 && idade <= 15){
            x1 += 1
        }
        else if(idade >= 16 && idade <= 30 ){
            x2 += 1
        }
        else if(idade >= 31 && idade <= 45){
            x3 += 1
        }
        else if(idade >= 46 && idade <= 60){
            x4 += 1 
        }
        else if(idade > 60){
            x5 += 1
        }
        else{
            erro = true
        }
    }
    if(erro){
        alert("Erro ao digitar números")
    }
    else{
        document.getElementById("resultado").innerHTML = `Faixa etária 1: ${x1} pessoas </br>   
        Faixa etária 2: ${x2} pessoas </br>
        Faixa etária 3: ${x3} pessoas </br>
        Faixa etária 4: ${x4} pessoas </br>
        Faixa etária 5: ${x5} pessoas </br>
        Porcentagem faixa etária 1: ${porcentagem(x1,cont)}% </br>
        Porcentagem faixa etária 5: ${porcentagem(x5,cont)}%`
    }
}