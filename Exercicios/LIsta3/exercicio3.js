function porcento(x,y){
    return (100*x) / y;
}
function calcularExe3(){

let i
let f1=0 ,f2=0 ,f3=0 ,f4=0 ,f5=0
let idade = 0
let erro = false
let cont = 0 
for (i = 1; i <=8; i++){
    idade = Number(prompt("Informe a Idade"))
    cont += 1

    if (idade >=0 && idade <=15){
        f1 += 1
    }
    else if (idade >15 && idade <= 30){
        f2 += 1
    }
    else if (idade >30 && idade <= 45){
        f3 += 1
    }
    else if (idade >45 && idade <= 60){
        f4 += 1
    }
    else if (idade > 60){
        f5 += 1
    }
    else {
        erro = true
    }
}
if(erro){
    alert = 'Erro valor errado informado!!!'
}
else {
    document.getElementById("resul").innerHTML=`Faixa etaria 1: ${f1} </br>
    Faixa etaria 2: ${f2} </br>
    Faixa etaria 3: ${f3} </br>
    Faixa etaria 4: ${f4} </br>
    Faixa etaria 5: ${f5} </br>
    Porcentagem faixa etaria 1: ${porcento(f1,cont)}%</br>
    Porcentagem faixa etaria 5: ${porcento(f5,cont)}%`

}
}    