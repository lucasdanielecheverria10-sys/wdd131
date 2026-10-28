// variavel constante do ano atual 
const anoAtualSpan = document.getElementById("anoatual");
const ultimaModificacaoParagraph =
    document.getElementById("ultimaModificacao");

const anoAtual = new Date().getFullYear();

anoAtualSpan.textContent = anoAtual;
// monstar data atual 
ultimaModificacaoParagraph.textContent =
    `Última modificação: ${document.lastModified}`;
