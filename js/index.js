const header = document.getElementById("header");
const navbar = document.createElement("navbar");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
header.appendChild(navbar);
navbar.appendChild(nav);
nav.appendChild(ul);
navbar.className = "navbar";

const links = ["Index", "Productos", "Contacto"];
const desingNav = document.getElementsByClassName("navbar");
header.style.backgroundColor = "#0004FF";

for (const link of links) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
};






