function calcularExe14(){
    let alunos = []
    let nota1 = []
    let nota2 = []
    let cont = 0
    let soma = 0
    let mediaSala
    let media = []

    for (let i = 0; i < 5; i++){
        alunos.push(String(prompt(`Digite o ${i+1}º nome: `)))
        nota1.push(Number(prompt(`Digite a primeira nota do ${alunos[i]}: `)))
        nota2.push(Number(prompt(`Digite a segunda nota do ${alunos[i]}: `)))
        media.push((nota1[i] + nota2[i]) / 2)
        cont++
        soma = nota1[i] + nota2[i] + soma
    }

    mediaSala = soma / cont

}