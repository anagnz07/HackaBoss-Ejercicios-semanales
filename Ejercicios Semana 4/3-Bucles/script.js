"use strict";

for (let i = 8; i <= 22; i += 1) {
    console.log(i);
}

let cucus;

for (let hora = 8; hora <= 22; hora += 1) {
    cucus = "";

    if (hora > 12) {
        for (let cucu = 1; cucu <= hora - 12; cucu += 1) {
            cucus = cucus + "cucú ";
        }
    } else {
        for (let cucu = 1; cucu <= hora; cucu += 1) {
            cucus = cucus + "cucú ";
        }
    }
    console.log(`${hora} ${cucus}`);
}

// VALOR INICIAL ; CONDICION DEL BUCLE ; ACCION EN CADA VUELTA
// for (let i = 0; i <= 24; i += 1) {
//     if (i >= 8 && i <= 22) {
//         console.log(i);
//     }
// }
