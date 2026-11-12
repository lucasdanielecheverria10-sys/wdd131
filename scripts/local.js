
const elementoAno = document.getElementById("ano-atual");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}


const elementoModificacao = document.getElementById("ultima-modificacao");
if (elementoModificacao) {
    elementoModificacao.textContent = document.lastModified;
}


/**
 * Calcula o fator de sensação térmica baseando-se na fórmula de Wind Chill.
 * @param {number} t - Temperatura
 * @param {number} v - Velocidade do vento
 * @param {string} unidade - 'C' para Celsius ou 'F' para Fahrenheit
 * @returns {number} O fator de sensação térmica arredondado
 */
function calcularSensacaoTermica(t, v, unidade) {
    return unidade.toUpperCase() === 'C'
        ? Math.round(13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16)))
        : Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(v, 0.16)) + (0.4275 * t * Math.pow(v, 0.16)));
}


window.addEventListener("load", () => {

    const temperatura = 8;
    const velocidadeVento = 10;
    const unidadeSistema = 'C';
    let resultadoExibicao = "N/A";

    if (unidadeSistema.toUpperCase() === 'C') {
        if (temperatura <= 10 && velocidadeVento > 4.8) {
            resultadoExibicao = `${calcularSensacaoTermica(temperatura, velocidadeVento, 'C')} °C`;
        }
    } else if (unidadeSistema.toUpperCase() === 'F') {
        if (temperatura <= 50 && velocidadeVento > 3) {
            resultadoExibicao = `${calcularSensacaoTermica(temperatura, velocidadeVento, 'F')} °F`;
        }
    }

    const elementoSensacao = document.getElementById("sensacao-termica");
    if (elementoSensacao) {
        elementoSensacao.textContent = resultadoExibicao;
    }
});
