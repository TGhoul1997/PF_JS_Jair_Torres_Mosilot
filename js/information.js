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

data.addEventListener("submit", (e) => {
    e.preventDefault();
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



