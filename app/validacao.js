function verificaSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log("Invalido! Você deve chutar um número.")
    }

    if (numeroMaiorOuMenorDoQuePermitido(numero)) {
        console.log(`Inválido! O numero secreto deve estár entre ${menorValor} e ${maiorValor}.`)
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorDoQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
