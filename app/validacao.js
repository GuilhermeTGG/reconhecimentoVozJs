function verificaSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Invalido! Você deve chutar um número.</div>'
    }

    if (numeroMaiorOuMenorDoQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Inválido! O numero secreto precisa estár entre ${menorValor} e ${maiorValor}.</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorDoQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
