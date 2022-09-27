
function calcularExe2() {
    let valorBase = 0
    let acrescimo = 0
    let porcentagem = 0
    let valorTotal = 0
    let erro = false
    let andares = Number(document.getElementById("andares").value)
    let metragem = Number(document.getElementById("metragem").value)
    let garagens = Number(document.getElementById("garagens").value)
    let posicao = Number(document.getElementById("posicao").value)

    if (metragem >= 0 && metragem < 80) {
        switch (garagens) {
            case 1:
                valorBase = 300000
                break
            case 2:
                valorBase = 320000
                break
            case 3:
                valorBase = 340000
                break
        }
    }
    else if (metragem >= 80 && metragem < 120) {
        if (garagens == 1) {
            valorBase = 400000
        }
        else if (garagens == 2) {
            valorBase = 420000
        }
        else if (garagens == 3) {
            valorBase = 440000
        }
        else {
            erro = true
        }
    }
    else if (metragem > 120) {
        if (garagens == 1) {
            valorBase = 500000
        }
        else if (garagens == 2) {
            valorBase = 520000
        }
        else if (garagens == 3) {
            valorBase = 540000
        }
        else {
            erro = true
        }
    }

    if (andares= 1) {
     acrescimo = 10000
    }
    else if (andares= 2) {
     acrescimo = 20000
    }
    else if (andares= 3) {
     acrescimo = 30000
    }
    else {
        erro = true
    }

    if  (posicao == 'M') {
     porcentagem = valorBase * 0.05
    }
    else {
     porcentagem = valorBase * 0.08
    }
    if (erro) {
        alert('Erro')
    }

    valorTotal = valorBase + acrescimo + porcentagem
    document.getElementById("resultado3").innerHTML = `O valor total do apartamento é ${valorTotal}`
}