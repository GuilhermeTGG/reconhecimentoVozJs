function verificaSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Invalido! Você deve chutar um número.</div> 
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        return
    }

    if (numeroMaiorOuMenorDoQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Inválido! O numero secreto precisa estár entre ${menorValor} e ${maiorValor}.</div>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é Menor <i class="fa-sharp fa-solid fa-circle-chevron-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é Maior  <i class="fa-sharp fa-solid fa-circle-chevron-up"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorDoQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()  
    }
})