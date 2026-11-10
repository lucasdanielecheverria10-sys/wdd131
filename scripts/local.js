// ==========================================
// 1. Rodapé: Ano Atual e Última Modificação
// ==========================================

// Exibe o ano atual no elemento com ID "ano-atual"
const elementoAno = document.getElementById("ano-atual");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

// Exibe a data da última modificação no elemento com ID "ultima-modificacao"
const elementoModificacao = document.getElementById("ultima-modificacao");
if (elementoModificacao) {
    elementoModificacao.textContent = document.lastModified;
}

// ==========================================
// 2. Clima: Cálculo da Sensação Térmica
// ==========================================

/**
 * Calcula o fator de sensação térmica baseando-se na fórmula de Wind Chill.
 * @param {number} t - Temperatura
 * @param {number} v - Velocidade do vento
 * @param {string} unidade - 'C' para Celsius ou 'F' para Fahrenheit
 * @returns {number} O fator de sensação térmica arredondado
 */
function calcularSensacaoTermica(t, v, unidade) {
    // Retorna o resultado em uma única linha usando o operador ternário para escolher a fórmula
    return unidade.toUpperCase() === 'C'
        ? Math.round(13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16)))
        : Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(v, 0.16)) + (0.4275 * t * Math.pow(v, 0.16)));
}

// Executa o código assim que a página é carregada
window.addEventListener("load", () => {
    // Definição das variáveis estáticas (Altere aqui para testar diferentes cenários)
    const temperatura = 8;       // Exemplo em °C (deve ser <= 10 para funcionar)
    const velocidadeVento = 10;  // Exemplo em km/h (deve ser > 4.8 para funcionar)
    const unidadeSistema = 'C';  // Use 'C' para Celsius ou 'F' para Fahrenheit

    let resultadoExibicao = "N/A";

    // Validação das condições antes de chamar a função
    if (unidadeSistema.toUpperCase() === 'C') {
        if (temperatura <= 10 && velocidadeVento > 4.8) {
            resultadoExibicao = `${calcularSensacaoTermica(temperatura, velocidadeVento, 'C')} °C`;
        }
    } else if (unidadeSistema.toUpperCase() === 'F') {
        if (temperatura <= 50 && velocidadeVento > 3) {
            resultadoExibicao = `${calcularSensacaoTermica(temperatura, velocidadeVento, 'F')} °F`;
        }
    }

    // Exibe o resultado na seção de Clima do HTML (requer um elemento com ID "sensacao-termica")
    const elementoSensacao = document.getElementById("sensacao-termica");
    if (elementoSensacao) {
        elementoSensacao.textContent = resultadoExibicao;
    }
});
