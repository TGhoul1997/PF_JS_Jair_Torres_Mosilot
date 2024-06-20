

let nombreCompleto;
// nombreCompleto = prompt("Hola! Para accceder a un préstamo a cuotas ingrese su nombre completo o escriba 'ESC' para salir.");
// if (nombreCompleto == "ESC") {
//     alert("¡Hasta pronto!");
// } else if (nombreCompleto == "") {
//     alert("Debe ingresar su nombre.");
// } else {
//     let ingresarDni = prompt("Hola " + nombreCompleto.toUpperCase() + ". Digite su DNI.");
//     if (ingresarDni !== "" && ingresarDni.length === 8) {
//         const article = document.getElementsByTagName("article");
//         const deudor = [{
//             nombre: nombreCompleto,
//             dni: ingresarDni,
//         }];
//         for (const datos of deudor) {
//             let deudorName = `${datos.nombre.toUpperCase()}`;
//             let deudorDni = `DNI: ${datos.dni}`;
//             const subtitle = document.createElement("h2");
//             const identification = document.createElement("h3");
//             subtitle.innerHTML = deudorName;
//             identification.innerHTML = deudorDni;
//             article[0].appendChild(subtitle);
//             article[0].appendChild(identification);
//         };
//         let ingresarMonto = parseFloat(prompt("Ingrese el monto en soles que desea solicitar."));
//         if (ingresarMonto !== "" && ingresarMonto >= 1000) {
//             let cuotasRequeridas = parseInt(prompt("Ingresa el número de cuotas requeridas (cuotas: 3, 6, 12 y 36)."));
//             switch (cuotasRequeridas) {
//                 case 3:
//                     class CuotaTres {
//                         constructor(monto, cuota) {
//                             this.monto = monto;
//                             this.cuota = cuota;
//                             this.cuotaMensual();
//                             this.montoInteres();
//                         };
//                         cuotaMensual() {
//                             this.cuotaCalculada = Math.round((this.monto * 1.05) / this.cuota);
//                         };
//                         montoInteres() {
//                             this.montoCalculado = Math.round(this.monto * 1.05);
//                         };
//                     };
//                     const pagosTres = [];
//                     pagosTres.push(new CuotaTres(ingresarMonto, cuotasRequeridas));
//                     for (const calculoTres of pagosTres) {
//                         const boxQuote = document.createElement("div");
//                         article[0].appendChild(boxQuote);
//                         boxQuote.className = "quoteline";
//                         for (let i = 1; i <= cuotasRequeridas; i++) {
//                             let cuotaInteres3 = `Cuota ${i}: S/. ${calculoTres.cuotaCalculada}`;
//                             const cuotaTexto3 = document.createElement("p");
//                             boxQuote.appendChild(cuotaTexto3)
//                             cuotaTexto3.innerHTML = cuotaInteres3;
//                         };
//                         let montoInteres3 = `Monto Total: S/. ${calculoTres.montoCalculado}`;
//                         const montoTexto3 = document.createElement("p");
//                         boxQuote.appendChild(montoTexto3);
//                         montoTexto3.innerHTML = montoInteres3;
//                     };
//                     break;
//                 case 6:
//                     class CuotaSeis {
//                         constructor(monto, cuota) {
//                             this.monto = monto;
//                             this.cuota = cuota;
//                             this.cuotaMensual();
//                             this.montoInteres();
//                         };
//                         cuotaMensual() {
//                             this.cuotaCalculada = Math.round((this.monto * 1.10) / this.cuota);
//                         };
//                         montoInteres() {
//                             this.montoCalculado = Math.round(this.monto * 1.10);
//                         };
//                     };
//                     const pagosSeis = [];
//                     pagosSeis.push(new CuotaSeis(ingresarMonto, cuotasRequeridas));
//                     for (const calculoSeis of pagosSeis) {
//                         const boxQuote = document.createElement("div");
//                         article[0].appendChild(boxQuote);
//                         boxQuote.className = "quoteline";
//                         for (let i = 1; i <= cuotasRequeridas; i++) {
//                             let cuotaInteres6 = `Cuota ${i}: S/. ${calculoSeis.cuotaCalculada}`;
//                             const cuotaTexto6 = document.createElement("p");
//                             boxQuote.appendChild(cuotaTexto6)
//                             cuotaTexto6.innerHTML = cuotaInteres6;
//                         };
//                         let montoInteres6 = `Monto Total: S/. ${calculoSeis.montoCalculado}`;
//                         const montoTexto6 = document.createElement("p");
//                         boxQuote.appendChild(montoTexto6);
//                         montoTexto6.innerHTML = montoInteres6;
//                     };
//                     break;
//                 case 12:
//                     class CuotaDoce {
//                         constructor(monto, cuota) {
//                             this.monto = monto;
//                             this.cuota = cuota;
//                             this.cuotaMensual();
//                             this.montoInteres();
//                         };
//                         cuotaMensual() {
//                             this.cuotaCalculada = Math.round((this.monto * 1.15) / this.cuota);
//                         };
//                         montoInteres() {
//                             this.montoCalculado = Math.round(this.monto * 1.15);
//                         };
//                     };
//                     const pagosDoce = [];
//                     pagosDoce.push(new CuotaDoce(ingresarMonto, cuotasRequeridas));
//                     for (const calculoDoce of pagosDoce) {
//                         const boxQuote = document.createElement("div");
//                         article[0].appendChild(boxQuote);
//                         boxQuote.className = "quoteline";
//                         for (let i = 1; i <= cuotasRequeridas; i++) {
//                             let cuotaInteres12 = `Cuota ${i}: S/. ${calculoDoce.cuotaCalculada}`;
//                             const cuotaTexto12 = document.createElement("p");
//                             boxQuote.appendChild(cuotaTexto12)
//                             cuotaTexto12.innerHTML = cuotaInteres12;
//                         };
//                         let montoInteres12 = `Monto Total: S/. ${calculoDoce.montoCalculado}`;
//                         const montoTexto12 = document.createElement("p");
//                         boxQuote.appendChild(montoTexto12);
//                         montoTexto12.innerHTML = montoInteres12;
//                     };
//                     break;
//                 case 36:
//                     class CuotaTreintaYSeis {
//                         constructor(monto, cuota) {
//                             this.monto = monto;
//                             this.cuota = cuota;
//                             this.cuotaMensual();
//                             this.montoInteres();
//                         };
//                         cuotaMensual() {
//                             this.cuotaCalculada = Math.round((this.monto * 1.20) / this.cuota);
//                         };
//                         montoInteres() {
//                             this.montoCalculado = Math.round(this.monto * 1.20);
//                         };
//                     };
//                     const pagosTreintaYSeis = [];
//                     pagosTreintaYSeis.push(new CuotaTreintaYSeis(ingresarMonto, cuotasRequeridas));
//                     for (const calculoTreintaYSeis of pagosTreintaYSeis) {
//                         const boxQuote = document.createElement("div");
//                         article[0].appendChild(boxQuote);
//                         boxQuote.className = "quoteline";
//                         for (let i = 1; i <= cuotasRequeridas; i++) {
//                             let cuotaInteres36 = `Cuota ${i}: S/. ${calculoTreintaYSeis.cuotaCalculada}`;
//                             const cuotaTexto36 = document.createElement("p");
//                             boxQuote.appendChild(cuotaTexto36)
//                             cuotaTexto36.innerHTML = cuotaInteres36;
//                         };
//                         let montoInteres36 = `Monto Total: S/. ${calculoTreintaYSeis.montoCalculado}`;
//                         const montoTexto36 = document.createElement("p");
//                         boxQuote.appendChild(montoTexto36);
//                         montoTexto36.innerHTML = montoInteres36;
//                     };
//                     break;
//                 default:
//                     alert("El número de cuotas requeridas no es válida.");
//                     break;
//             };
//         } else {
//             alert("Ingrese un monto mayor o igual a 1000 para poder continuar.");
//         };
//     } else {
//         alert("Debe ingresar su DNI para poder continuar.");
//     };
// };

