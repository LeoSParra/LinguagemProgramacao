function calcular()
    {
        let sal = Number(document.getElementById("sal").value)

        if(sal < 500){
            let salnovo = sal + ((sal/100) * 30)
            document.getElementById("salnovo").innerHTML = ` O seu novo salário é de ${salnovo.toFixed(2)}`
        }else{
            document.getElementById("salnovo").innerHTML = `N pode receber um aumento`
        }

    }