// Preenche as informações do rodapé.
const elementoAno = document.querySelector("#ano-atual");
const elementoModificacao = document.querySelector("#ultima-modificacao");

if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

if (elementoModificacao) {
    elementoModificacao.textContent = document.lastModified;
}

// Calcula a sensação térmica usando a fórmula de Wind Chill.
// A fórmula recebe temperatura e velocidade do vento nas unidades escolhidas.
function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return Math.round(
        13.12 +
        (0.6215 * temperatura) -
        (11.37 * Math.pow(velocidadeVento, 0.16)) +
        (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16))
    );
}

// Valores estáticos correspondentes aos exibidos na seção Clima.
const temperatura = 8;
const velocidadeVento = 10;
const unidade = "C";

let resultado = "N/A";

// Só calcula quando os limites exigidos pela atividade são atendidos.
if (unidade === "C" && temperatura <= 10 && velocidadeVento > 4.8) {
    resultado = `${calcularSensacaoTermica(temperatura, velocidadeVento, unidade)} °C`;
} else if (unidade === "F" && temperatura <= 50 && velocidadeVento > 3) {
    resultado = `${calcularSensacaoTermica(temperatura, velocidadeVento, unidade)} °F`;
}

const elementoSensacao = document.querySelector("#sensacao-termica");
if (elementoSensacao) {
    elementoSensacao.textContent = resultado;
}
