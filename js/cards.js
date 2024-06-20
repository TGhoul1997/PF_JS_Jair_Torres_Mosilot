const cards = [
    {
        id: 1,
        title: "Amex Clásica LATAM Pass",
        b1: "Membresía anual S/ 80 (GRATIS si consumes S/1 al mes)",
        b2: "1 Milla acumulada por cada 2 USD que consumas",
        b3: "Campañas multiplicadoras de Millas",
        b4: "Delivery gratis a donde quieras",
    },
    {
        id: 1,
        title: "Amex Oro LATAM Pass",
        b1: "Membresía anual S/ 80 (GRATIS si consumes S/1 al mes)",
        b2: "1 milla por cada USD 1.5 de consumo",
        b3: "Campañas multiplicadoras de Millas",
        b4: "Delivery gratis a donde quieras",
    },
    {
        id: 1,
        title: "Amex Platinum LATAM Pass",
        b1: "3,000 Millas de bienvenida",
        b2: "Membresía anual S/350 (GRATIS si consumes S/1,200 al mes)",
        b3: "1 Milla acumulada por cada 1 USD que consumas",
        b4: "Delivery gratis a donde quieras",
    },
];

const imagenes = ["clasica", "oro", "platinum"];

const saveCardsLocalStorage = (key, value) => { localStorage.setItem(key, value) };
saveCardsLocalStorage("cards", JSON.stringify(cards));

const galleryContainer = document.querySelector(".slide");
const prev = document.querySelector(".control.icon-prev");
const next = document.querySelector(".control.icon-next");
const btn = document.getElementsByClassName("control");
let currentIndex = 0;

btn[0].style.display = "none";
btn[1].style.display = "none";

function createGallery() {
    imagenes.forEach((img, index) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        image.src = `img/${img}.webp`;
        image.alt = `img ${index + 1}`;
        li.appendChild(image);
        if (index === 0) {
            li.classList.add("active");
        }
        galleryContainer.appendChild(li);
    });
};

if (article.appendChild(subtitle)) {
    data.style.display = "none"
    const selectCard = document.createElement("p");
    article.appendChild(selectCard);
    selectCard.innerHTML = "¡Selecciona la opción que más te guste!";
    selectCard.style.fontSize = "1.5em";

    btn[0].style.display = "";
    btn[1].style.display = "";

    function showImage(index) {
        const galleryItems = document.querySelectorAll(".slide li");
        galleryItems.forEach((li, i) => {
            li.classList.toggle('active', i === index);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        showImage(currentIndex);
    }

    next.addEventListener("click", showNextImage);
    prev.addEventListener("click", showPrevImage);

    createGallery();
    showImage(currentIndex);

};