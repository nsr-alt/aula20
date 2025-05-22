function calcular(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const n3 = Number(document.getElementById('n3').value)

    const resultado = document.getElementById('resultado')    
    const calculo = (n1 + n2+ n3) / 3

    if (calculo > 6){
        resultado.innerHTML = `<p>Média: ${calculo.toFixed(2)} <br> Status: Aprovado</p>`
    }else{
        resultado.innerHTML = `<p>Média: ${calculo.toFixed(2)} <br> Status: Reprovado</p>`
    }
}