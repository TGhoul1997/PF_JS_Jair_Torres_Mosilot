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

data.addEventListener("submit", (e) => {
    e.preventDefault();
    article.appendChild(subtitle);
    article.appendChild(identification);
    article.appendChild(age);
    subtitle.innerHTML = `Hola ${clientName.value}`;
    identification.innerHTML = `DNI: ${clientDni.value}`;
    age.innerHTML = `Edad: ${clientAge.value}`;
    if (data !== "") {
        data.style.display = "none"
    };
});
data.addEventListener("input", () => {
    class Client {
        constructor(nombre, dni, edad) {
            this.nombre = nombre;
            this.dni = dni;
            this.edad = edad;
        };
    };
    const clientInfo = [];
    clientInfo.push(new Client(clientName.value, clientDni.value, clientAge.value));
    const saveInfoLocalStorage = (key, value) => {localStorage.setItem(key, value)};
    saveInfoLocalStorage ("clientInfo", JSON.stringify(clientInfo));
});