// Dados dos templos. Cada objeto utiliza as propriedades solicitadas na atividade.
const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-03-02",
        area: 6861,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        nomeDoTemplo: "Rio de Janeiro Brasil",
        localizacao: "Rio de Janeiro, Brasil",
        consagracao: "2022-05-08",
        area: 29966,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    },
    {
        nomeDoTemplo: "Roma Itália",
        localizacao: "Roma, Itália",
        consagracao: "2019-03-10",
        area: 41010,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo, Brasil",
        consagracao: "1978-10-30",
        area: 59246,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    }
];

// Elementos da página.
const gridContainer = document.querySelector(".grid");
const pageTitle = document.querySelector("#galeria");
const navLinks = document.querySelectorAll("nav a");

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
}

// Cria e exibe os cartões de templo dinamicamente.
function createTempleCard(templosFiltrados) {
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    templosFiltrados.forEach((templo) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const nome = document.createElement("h3");
        nome.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.innerHTML = `<span class="label">Localização:</span> `;
        localizacao.append(templo.localizacao);

        const data = document.createElement("p");
        data.innerHTML = `<span class="label">Consagração:</span> `;
        const dataConsagracao = new Date(`${templo.consagracao}T00:00:00`);
        data.append(
            Number.isNaN(dataConsagracao.getTime())
                ? templo.consagracao
                : dataConsagracao.toLocaleDateString("pt-BR")
        );

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Área:</span> `;
        area.append(`${templo.area.toLocaleString("pt-BR")} pés quadrados`);

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
        imagem.loading = "lazy";
        imagem.width = 400;
        imagem.height = 250;

        card.append(nome, localizacao, data, area, imagem);
        gridContainer.appendChild(card);
    });
}

// Atualiza o filtro selecionado e o título da galeria.
function aplicarFiltro(titulo, templosFiltrados, linkAtivo) {
    pageTitle.textContent = titulo;
    createTempleCard(templosFiltrados);

    navLinks.forEach((link) => link.classList.remove("evento"));
    linkAtivo.classList.add("evento");
}

// Página Inicial: exibe todos os templos.
document.querySelector("#home").addEventListener("click", (evento) => {
    evento.preventDefault();
    aplicarFiltro("Templos do Mundo", templos, evento.currentTarget);
});

// Antigos: templos consagrados antes de 1900.
document.querySelector("#old").addEventListener("click", (evento) => {
    evento.preventDefault();
    const templosAntigos = templos.filter((templo) => {
        const ano = Number(templo.consagracao.slice(0, 4));
        return ano < 1900;
    });
    aplicarFiltro("Templos Antigos", templosAntigos, evento.currentTarget);
});

// Novos: templos consagrados depois de 2000.
document.querySelector("#new").addEventListener("click", (evento) => {
    evento.preventDefault();
    const templosNovos = templos.filter((templo) => {
        const ano = Number(templo.consagracao.slice(0, 4));
        return ano > 2000;
    });
    aplicarFiltro("Templos Novos", templosNovos, evento.currentTarget);
});

// Grandes: templos com área superior a 90.000 pés quadrados.
document.querySelector("#large").addEventListener("click", (evento) => {
    evento.preventDefault();
    const templosGrandes = templos.filter((templo) => templo.area > 90000);
    aplicarFiltro("Templos Grandes", templosGrandes, evento.currentTarget);
});

// Pequenos: templos com área inferior a 10.000 pés quadrados.
document.querySelector("#small").addEventListener("click", (evento) => {
    evento.preventDefault();
    const templosPequenos = templos.filter((templo) => templo.area < 10000);
    aplicarFiltro("Templos Pequenos", templosPequenos, evento.currentTarget);
});

// Fecha o menu móvel após a seleção de um filtro.
menuNavegacao.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuNavegacao.classList.remove("aberto");
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    });
});

// Exibição inicial de todos os templos.
createTempleCard(templos);
