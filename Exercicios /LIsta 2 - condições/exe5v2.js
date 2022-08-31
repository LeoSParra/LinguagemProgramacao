function calcular(){
    // recuperar os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let escolha = Number(document.getElementById("escolha").value)
    // regras de negócio
    // vamos criar uma variável booleana para verificar algum erro
    let erro = false // assumo que não temos erro
    let resultado
 
 
    switch (escolha) {
       case 1:  resultado = (nro1 + nro2) / 2   
                break  
       case 2:  if (nro1 > nro2){
                   resultado = nro1 - nro2
                }
                else {
                   resultado = nro2 - nro1
                }
                break
       case 3:  resultado = nro1 * nro2
                break
       case 4:  if (nro2 != 0){ // != é o símbolo de diferente
                   resultado = nro1 / nro2
                }
                else {
                   erro = true // temos um erro
                }      
                break    
       default: erro = true // temos um erro
                break
    } 
    if (erro){
       document.getElementById("resultado").innerHTML = "Erro no programa. Tente novamente"    
    }   
    else{
       document.getElementById("resultado").innerHTML = resultado
    } 
 }