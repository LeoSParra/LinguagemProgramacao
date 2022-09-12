function porcentagem(x,y){
    return (x*100) / y

}
function calcularExe3(){
    let idade = 0
    let cont = 0
    let erro = false
    let f1=0, f2=0, f3=0, f4=0, f5=0


    for(let i = 0; i < 8; i++){
        idade = Number(prompt(`Informe a idade ${i+1}:`))
        cont += 1

        if(idade >= 0 && idade <= 15){
            f1 += 1
        }
        else if(idade >= 16 && idade <= 30 ){
            f2 += 1
        }
        else if(idade >= 31 && idade <= 45){
            f3 += 1
        }
        else if(idade >= 46 && idade <= 60){
            f4 += 1 
        }
        else if(idade > 60){
            f5 += 1
        }
        else{
            alert("valor negativo, digite novamente")
            console.log("Valor negativo, digite novamente")
            i--
        }
    }
    document.getElementById("resultado").innerHTML = `Faixa etária 1: ${f1} pessoas </br>   
    Faixa etária 2: ${f2} pessoas </br>
    Faixa etária 3: ${f3} pessoas </br>
    Faixa etária 4: ${f4} pessoas </br>
    Faixa etária 5: ${f5} pessoas </br>
    Porcentagem faixa etária 1: ${porcentagem(f1,cont)}% </br>
    Porcentagem faixa etária 5: ${porcentagem(f5,cont)}%`
}