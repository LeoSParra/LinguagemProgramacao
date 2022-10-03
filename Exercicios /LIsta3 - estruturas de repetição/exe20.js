function calcularExe20(){
    let opcao

    do{
        opcao = Number(prompt(`Menu de opções \n 1: Média aritmética \n 2: Média ponderada \n 3: sair`))

        switch(opcao){
            case 1:
                let nota1 = Number(prompt(`Digite a primeira nota: `))
                let nota2 = Number(prompt(`Digite a segunda nota: `))
                let media = (nota1 + nota2) / 2
                alert(`A média aritmética é: ${media}`)
                break
            case 2:
                let nota3 = Number(prompt(`Digite a primeira nota: `))
                let p1 = Number(prompt(`Digite o primeiro peso: `))
                let nota4 = Number(prompt(`Digite a segunda nota: `))
                let p2 = Number(prompt(`Digite o segundo peso: `))
                let nota5 = Number(prompt(`Digite a terceira nota: `))
                let p3 = Number(prompt(`Digite o terceiro peso: `))

                let mediaPonderada = (nota3 * p1) + (nota4 * p2) + (nota5 * p3) / (p1 + p2 + p3)
                alert(`A média ponderada é: ${mediaPonderada}`)
                break
            case 3:
                alert(`Obrigado por usar o nosso programa `)
                break
        }
    }while (opcao != 3)
}