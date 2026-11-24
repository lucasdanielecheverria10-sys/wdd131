let numAvaliacoes = Number(window.localStorage.getItem("numAvaliacoes-ls")) || 0;

numAvaliacoes++;

localStorage.setItem("numAvaliacoes-ls", numAvaliacoes);

document.getElementById("contadorAvaliacoes").textContent = numAvaliacoes;

// Datas do rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;
