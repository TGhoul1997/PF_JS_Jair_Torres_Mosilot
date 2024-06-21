const cards = [
    {
        id: 1,
        title: "Amex Clásica LATAM Pass",
        image: "clasica",
        b1: "Membresía anual S/ 80 (GRATIS si consumes S/1 al mes)",
        b2: "1 Milla acumulada por cada 2 USD que consumas",
        b3: "Campañas multiplicadoras de Millas",
        b4: "Delivery gratis a donde quieras",
    },
    {
        id: 2,
        title: "Amex Oro LATAM Pass",
        image: "oro",
        b1: "Membresía anual S/ 80 (GRATIS si consumes S/1 al mes)",
        b2: "1 milla por cada USD 1.5 de consumo",
        b3: "Campañas multiplicadoras de Millas",
        b4: "Delivery gratis a donde quieras",
    },
    {
        id: 3,
        title: "Amex Platinum LATAM Pass",
        image: "platinum",
        b1: "3,000 Millas de bienvenida",
        b2: "Membresía anual S/350 (GRATIS si consumes S/1,200 al mes)",
        b3: "1 Milla acumulada por cada 1 USD que consumas",
        b4: "Delivery gratis a donde quieras",
    },
];

const clientOBJECT = JSON.parse(localStorage.getItem("clientInfo"));

if (clientOBJECT) {
    const form = document.getElementsByTagName("form");
    form[0].style.display = "none";

    subtitle.innerHTML = `Hola ${(clientOBJECT[0].nombre).toUpperCase()}`;
    identification.innerHTML = `DNI: ${clientOBJECT[0].dni}`;
    age.innerHTML = `Edad: ${clientOBJECT[0].edad}`;

    const selectCard = document.createElement("p");
    article.appendChild(selectCard);
    selectCard.innerHTML = "¡Selecciona la opción que más te guste!";
    selectCard.style.fontSize = "1.5em";

    let selection = loadCardFromLocalStorage();

function addCard(cardId) {
    const card = cards.find(c => c.id === cardId);
    if (!card) {
        console.error("Tarjeta de Credito no encontrada");
        return;
    };

    selection = [{
        id: card.id,
        image: card.image,
        title: card.title,
        b1: card.b1,
        b2: card.b2,
        b3: card.b3,
        b4: card.b4,
    }];

    saveCardToLocalStorage();
    renderSelection();
    renderCards();
};

function renderCards() {
    const cardList = document.getElementById("card-list");
    cardList.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card--position"
        cardDiv.innerHTML = `
        <h5>${card.title}</h5>
        <img src="img/${card.image}.webp" alt="${card.image}">
        <p>${card.b1}</p>
        <p>${card.b2}</p>
        <p>${card.b3}</p>
        <p>${card.b4}</p>
        <button onclick="addCard(${card.id}, 1)">Seleccionar tarjeta</button>
    `;
        cardList.appendChild(cardDiv);
    });
}

function renderSelection() {
    const selectionDiv = document.getElementById("selection-list");
    selectionDiv.innerHTML = "";
    selection.forEach(item => {
        const selectionItemDiv = document.createElement("div");
        selectionItemDiv.className = "selection--position"
        selectionItemDiv.innerHTML = `
        <h5>${item.title}</h5>
        <img src="img/${item.image}.webp" alt="${item.image}">
        <p>${item.b1}</p>
        <p>${item.b2}</p>
        <p>${item.b3}</p>
        <p>${item.b4}</p>
    `;
        selectionDiv.appendChild(selectionItemDiv);
    });
};

function saveCardToLocalStorage() {
    localStorage.setItem("selection", JSON.stringify(selection));
};

function loadCardFromLocalStorage() {
    const selectionData = localStorage.getItem("selection");
    return selectionData ? JSON.parse(selectionData) : [];
};

document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    renderSelection();
});

};






