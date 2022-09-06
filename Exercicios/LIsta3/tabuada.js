function calcular(){

    let num = 1

    while(num <= 10){
        let contador = 0
        while(contador <= 10){
            console.log(`${num} x ${contador} = ${num*contador}`)
            contador++
        }
        num++
    }

}
function calcularMedia(){
    let altura
    let contador = 1
    let acumula = 0 // neutro para somma
    while(contador <= 3){
        altura = Number (prompt(`Informe a altura`))
        acumula = acumula + altura 
        contador++
    }
    console.log(`A média das alturas é ${(acumula/(contador-1)).toFixed(2)}`)
    
}