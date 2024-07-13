submit.addEventListener("mouseover", () => {
    submit.style.color = "#fff";
    submit.style.backgroundColor = "blue";
    submit.style.border = "inset";
    submit.style.cursor = "pointer";
});
submit.addEventListener("mouseout", () => {
    submit.style.color = "blue";
    submit.style.backgroundColor = "#fff";
    submit.style.border = "outset";
});
let data = document.getElementById("data");
const article = document.createElement("article");
const section = document.getElementsByTagName("section");
section[0].appendChild(article)
const clientName = document.getElementById("clientName");
const clientDni = document.getElementById("clientDni");
const clientAge = document.getElementById("clientAge");
const subtitle = document.createElement("h2");
const identification = document.createElement("h3");
const age = document.createElement("h4");
article.appendChild(subtitle);
article.appendChild(identification);
article.appendChild(age);

data.addEventListener("submit", () => {
    if (clientName.value !== "") {
        if (clientDni.value !== "" && clientDni.value.length === 8) {
            if (clientAge.value !== "" && parseInt(clientAge.value) >= 18) {
                class Client {
                    constructor(nombre, dni, edad) {
                        this.nombre = nombre;
                        this.dni = dni;
                        this.edad = edad;
                    };
                };
                const clientInfo = [];
                clientInfo.push(new Client(clientName.value, clientDni.value, clientAge.value));
                const clientJSON = JSON.stringify(clientInfo);
                localStorage.setItem("clientInfo", clientJSON);
            };
        };
    };
});

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
    };

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
            if (selectionItemDiv) {
                const divClear = document.getElementById("card-list");
                divClear.style.display = "none"
            };
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


