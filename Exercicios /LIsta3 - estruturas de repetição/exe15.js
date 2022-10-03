function calcularExe15(){
    let sexo
    let voto
    let votoSim=0, votoNao=0    
    let qtdFemSim=0
    let masculino=0
    let qtdMasNao=0

    for(let i = 0; i < 10; i++){
        sexo = prompt(`Informe F - feminino; M - masculino:`)
        voto = prompt(`Informe S - sim; ou N - não: `)
        
        if(voto == 'S'){
            votoSim++
        }
        else if(voto == 'N'){
            votoNao++
        }
        if(sexo == 'M'){
            masculino++
        }
        if(voto == 'S' && sexo == 'F'){
            qtdFemSim++
        }
        if(voto == 'N' && sexo == 'M'){
            qtdMasNao++
        }
    }
    document.getElementById("resultado").innerHTML = `Número de pessoas que respoderam sim: ${votoSim} </br>
    Número que responderam não: ${votoNao} </br>
    Número de mulheres que responderam sim: ${qtdFemSim} </br>
    Percentagem de homens que responderam não: ${((qtdMasNao*100) / masculino).toFixed(2)}% </br>
    Qtd masculino ${masculino} </br>
    Qtd não masculino ${qtdMasNao}`
}