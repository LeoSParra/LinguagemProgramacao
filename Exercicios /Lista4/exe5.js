function calcularExe5() {
    let logica = []
    let linguagem = []

    for (let i = 0; i < 5; i++) {
        logica.push(Number(prompt(`Informe a ${i+1}º matricula de lógica: `)))
    }

    for (let i = 0; i < 3; i++) {
        linguagem.push(Number(prompt(`Informe a ${i+1}º matricula de linguagem: `)))
    }
    
    let juntas = []
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 3; j++){
            if(logica[i] == linguagem[j]){
                juntas.push(logica[i])
            }
        }
    }
    if (juntas.length == 0){
        alert(`Não existem alunos da mesma disciplina `)
    }
    else {
    alert(`Os que fazem a mesma disciplina são: ${juntas}`)
    }   

}   