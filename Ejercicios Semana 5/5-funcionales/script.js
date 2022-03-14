"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];


function printBestWorst(teams){

  // Creo un nuevo array a partir del original
  const totales = teams.map(team => {

    //Guardo los elementos en variables para que sea más comodo
    const {equipo, puntos} = team;

    //console.log(equipo, puntos)

    //Calculo el total
    const total = puntos.reduce((a, b) => a + b)
    //console.log(total)

    //Por cada elemento devuelvo un nuevo objeto con el nombre y el total
    return {equipo, total}
  })

  //Ordeno el nuevo array
  totales.sort((a, b) => a.total - b.total)

  //console.log(totales)


  //Guardo el peor (primero) y el mejor (último)
  const peor = totales[0];
  const mejor = totales[totales.length - 1]


  //Saco las frases
  console.log(`El peor equipo es ${peor.equipo} con un total de ${peor.total} puntos`)
  console.log(`El mejor equipo es ${mejor.equipo} con un total de ${mejor.total} puntos`)
  
}

printBestWorst(puntuaciones)


//Compruebo que no modifico el original
//console.log(puntuaciones)