function calcularTabuada() {

    let num = 1

    while (num <= 10) {
        let contador = 0
        while (contador <= 10) {
            console.log(`${num} x ${contador} = ${num * contador}`)
            contador++
        }
        num++
    }       
}