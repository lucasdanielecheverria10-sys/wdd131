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
// Filtro dos templos 

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-03-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templosldsorg/bc/templos/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Adicione mais objetos de templos aqui...
];

const gridContainer = document.querySelector(".grid");
const pageTitle = document.querySelector("#galeria");

// Função para renderizar os cards
function createTempleCard(filteredtemplos) {
    gridContainer.innerHTML = "";

    filteredtemplos.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        gridContainer.appendChild(card);
    });
}

// Exibição inicial (Todos os templos)
createTempleCard(templos);

// Eventos de clique nos links de filtro
const navLinks = document.querySelectorAll(".navigation a");

function setActiveLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove("evento"));
    clickedLink.classList.add("evento");
}

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageTitle.textContent = "Home";
    createTempleCard(templos);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageTitle.textContent = "Old";
    // Templos construídos antes de 1900
    const oldtemplos = templos.filter(templo => parseInt(templo.dedicated.split(",")[0]) < 1900);
    createTempleCard(oldtemplos);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageTitle.textContent = "New";
    // Templos construídos depois de 2000
    const newtemplos = templos.filter(templo => parseInt(templo.dedicated.split(",")[0]) > 2000);
    createTempleCard(newtemplos);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageTitle.textContent = "Large";
    // Templos maiores que 90.000 sq ft
    const largetemplos = templos.filter(templo => templo.area > 90000);
    createTempleCard(largetemplos);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageTitle.textContent = "Small";
    // Templos menores que 10.000 sq ft
    const smalltemplos = templos.filter(templo => templo.area < 10000);
    createTempleCard(smalltemplos);
});
