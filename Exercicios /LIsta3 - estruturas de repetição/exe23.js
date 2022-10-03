function calcularExe23(){
    let opcao
    let sal

    do{
        opcao = Number(prompt(`Informe \n 1: Novo salário \n 2: Férias \n 3: Décimo terceiro \n 4: Sair`))

        switch(opcao){
            case 1: 
                let novo
                sal = Number(prompt(`Informe o salário do funcionario: `))

                if (sal >= 0 && sal <= 250){
                    novo = sal + ((sal * 15) / 100)
                } else if (sal > 250 && sal <= 600){
                    novo = sal + ((sal * 10) / 100)
                } else if (sal > 600){
                    novo = + sal + ((sal * 5) / 100)
                } else {
                    alert(`salário não pode ser negativo`)
                    break
                }
                alert(`Novo salário: ${novo}`)
                break
            case 2:
                let ferias
                sal = Number(prompt(`Informe o salário do funcionario: `))
                if (sal >= 0){
                    ferias = (sal + sal / 3)
                    alert(`salário das férias: ${ferias.toFixed(2)}`)
                } else {
                    alert(`salário não pode ser negativo`)
                }
                break
            case 3:
                sal = Number(prompt(`Informe o salário do funcionario: `))
                if(sal >= 0){
                    let meses = Number (prompt(`Meses trabalhos no ano: `))
                    if (meses >= 0 && meses <= 12){
                        let decimoTerceiro = (sal * (meses / 12))
                        alert(`Valor do décimo terceiro ${decimoTerceiro}`)
                    } else {
                        alert(`meses não podem ser negativos nem > 12`)
                    }
                } else {
                    alert(`Salárioo não pode ser negativo`)
                }
                break
            case 4:
                alert(`Obrigado por utilizar nosso sistema`)
                break
            default:
                alert(`Opção inválida, tente novamente`)
        }
    }while(opcao != 4)
}