// Atualiza o ano e a data da última modificação no rodapé.
const anoAtualSpan = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}
if (ultimaModificacao) {
    const dataModificacao = new Date(document.lastModified);
    ultimaModificacao.textContent =
        `Última modificação: ${dataModificacao.toLocaleString("pt-BR")}`;
}

// Controla a abertura e o fechamento do menu móvel.
const botaoMenu = document.querySelector("#menu");
const menuNavegacao = document.querySelector("#menu-principal");

if (botaoMenu && menuNavegacao) {
    botaoMenu.addEventListener("click", () => {
        const menuAberto = menuNavegacao.classList.toggle("aberto");
        botaoMenu.textContent = menuAberto ? "✕" : "☰";
        botaoMenu.setAttribute("aria-expanded", String(menuAberto));
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );
    });

    menuNavegacao.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuNavegacao.classList.remove("aberto");
            botaoMenu.textContent = "☰";
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
        });
    });
}
