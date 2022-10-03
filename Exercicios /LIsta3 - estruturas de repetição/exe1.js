function calcularExe1(){
    let aux = 0

    for(let j = 0; j < 5; j++){
        let a = Number(prompt(`Digite o primeiro valor: `))
        let b = Number(prompt(`Digite o segundo valor: `))
        let c = Number(prompt(`Digite o terceiro valor: `))
        let d = Number(prompt(`Digite o quarto valor: `))

        console.log(`Ordem lida: ${a} - ${b} - ${c} - ${d}`)

        for(let i = 0; i < 3; i++){
            if(a > b){
                aux = a
                a = b
                b = aux
            }
            if(b > c){
                aux = b
                b = c
                c = aux
            }
            if(c > d){
                aux = c
                c = d
                d = aux
            }
        }
        console.log(`Crescente: ${a} - ${b} - ${c} - ${d}`) 
        console.log(`Decrescente: ${d} - ${c} - ${b} - ${a}`) 
    }
}