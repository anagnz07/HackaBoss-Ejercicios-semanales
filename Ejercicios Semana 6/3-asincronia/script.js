"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 


function printAge(age){
 // console.log(age)
  return new Promise((resolve, reject)=>{

    //Si la edad es menor a 18 la promesa se rechazará inmediatamente con el mensaje "edad es menor".
    if(age < 18){
      reject("Es menor")
    }

    //Si la edad es par, la promesa se resolverá al cabo de un segundo con el mensaje "edad es par".
    if(age % 2 === 0){
      setTimeout(()=>{
        //console.log("es par")
        resolve("Edad es par")
      }, 1000)
    } else {
      //Si la edad es impar, la promesa se resolverá al cabo de dos segundos con el mensaje "edad es impar".

      setTimeout(()=>{
        //console.log("impar")
        resolve("Edad es impar")
      }, 2000)

    }

  })
}

//printAge(21)


// Usar el then para resolver las promesas

agePromise.then(age => {printAge(age).then(res => {console.log(res)}).catch(e=>{console.error(e)})})



//Usar una función asíncrona para resolver las promesas
async function main(){
  try {
    //Esperamos a tener la edad
  const age = await agePromise;
  //console.log(age)

  //Esperamos a tener la frase
  const frase = await printAge(age)

  //La sacamos por consola
  console.log(frase)
  } catch (error) {
    console.error(error)
  }

  
}

main()