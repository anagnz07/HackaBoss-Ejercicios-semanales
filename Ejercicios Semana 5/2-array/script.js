"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];


// Primera forma

console.log("/// CON BUCLE FOR ///")

// Logica: Vamos metiendo a un nuevo array solo los nombres que aún no hayan salido. Los repetidos se quedan fuera.

function deleteDuplicated(arr){

  //Creamos un nuevo array vacio
  const newArr = [];

  //Recorremos el array original
  for(const el of arr){
    //console.log(el, newArr.includes(el))

    //Si NO está en el nuevo array, lo metemos
    if(!newArr.includes(el) /* newArray.includes(el) === false */){
      newArr.push(el)
    }
  }

  //devolvemos el nuevo array
 return newArr;
}

console.log(deleteDuplicated(names))


//////////////////////////
console.log(" ")

console.log("///// CON SET /////")

function deleteDupliSet(arr){
  const set = new Set(arr)
  return [...set]
}

console.log(deleteDupliSet(names))


////////////////

console.log(" ")
console.log("//// CON REDUCE ////")


// La lógica es la misma que en la primera forma, pero en vez de hacer nosotros un nuevo array, es el acumulador

function deleteDupReduce(arr){

  //Devolvemos directamente el resultado del reduce (el acumulador al terminar)
  return arr.reduce((acc, el)=>{

    //Si NO está en el array del acumulador, lo metemos
    if(!acc.includes(el)){
      acc.push(el)
    }

    // Devolvemos siempre el acumulador como está para que se mantenga
    return acc
  }, [])
}


console.log(deleteDupReduce(names))



////////////////////////////
// CON FILTER
console.log(" ")
console.log("///// CON FILTER ////")

function deleteDupFilter(arr){


  // Esto es para comprobar por qué funciona lo de abajo
 /*  for(let i = 0; i < arr.length; i++){
    const name = arr[i]
  console.log(name, i, arr.indexOf(name))
  }
 */

 /*  function callback(el, index){
    return arr.indexOf(el) === index
  }

  return arr.filter(callback) */


  //Si el indexOf NO coincide con el index, es que no es la primera vez que aparece
  //Solo pasan el filtro los que coinciden
  return arr.filter((el, index) =>
    arr.indexOf(el) === index
  )

}

console.log(deleteDupFilter(names))