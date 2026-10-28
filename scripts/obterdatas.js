
const anoAtualSpan = document.getElementById("anoatual");
const ultimaModificacaoParagraph =
    document.getElementById("ultimaModificacao");

const anoAtual = new Date().getFullYear();

anoAtualSpan.textContent = anoAtual;

ultimaModificacaoParagraph.textContent =
    `Última modificação: ${document.lastModified}`;
