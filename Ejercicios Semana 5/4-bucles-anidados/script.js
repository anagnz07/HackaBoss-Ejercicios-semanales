"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];




function combinados(catalogo){
//Creamos un nuevo array vacío
const newArr = [];

  for(let i = 0; i < catalogo.length; i++){
   // console.log(catalogo[i])

   // Iniciamos el bucle interno desde el elemento siguiente al actual
   //Para evitar repetir combinaciones o hacer mitad iguales
    for(let j = i + 1; j < catalogo.length; j++){
      //console.log(catalogo[i], catalogo[j])

      //Añadimso la combinación al nuevo array
      newArr.push(`${catalogo[i]} y ${catalogo[j]}`)
    }
  }

  //Devolvemos el array
  return newArr
}

console.log(combinados(catalogo))