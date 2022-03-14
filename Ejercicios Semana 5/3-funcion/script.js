"use strict";


function checkPassword(){

  //Generar una contraseña (número entero aleatorio del 0 al 100)
  const password = Math.round(Math.random() * 100)

  //Console.log para PRUEBAS
  console.log(password)
  const intentos = 5;

  for(let i = 0; i < intentos; i++){

    //Pedir al usuario que introduzca un número dentro de ese rango
    const userNum = +prompt("Introduce un número de 0 a 100")
    /* console.log(userNum === password) */

    //Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado; 
    if(userNum === password){
      console.log("Has ganado!")

      //Return para que pare la función
      return
    }

     // si no, el mensaje indicará si la contraseña en un número mayor o menor al introducido y dará una nueva oportunidad.
     if(userNum < password){
       console.log("El número introducido es menor que la contraseña")
     } else {
       console.log("El número introducido es mayor que la contraseña")
     }
 

  }

  // Si se acaba el bucle, imprimimos mensaje de derrota
  console.log("Has perdido!")

}

//checkPassword()


////////////
//Versión con extras
console.log("")
console.log("///// CON EXTRAS /////")

function game(tries, min, max){
  //Generamos la contraseña con la función auxiliar
  const password = generatePassword(min, max)
  console.log(password)

  for(let i = 0; i < tries; i++){
    //pedimos un número
    //Poenmos el + para convertir a número
    const userNum = +prompt(`Introduce un número de ${min} a ${max}`)

    if(userNum === password){
      alert("Enhorabuena, has ganado!");
      return
    }

    //Mostramos un aviso indicando si es mayor o menor
    alert(`El número introducido (${userNum}) es ${userNum < password? "menor" : "mayor"} que la contraseña. Te quedan ${tries - i - 1} intentos`)
  }


  //Si se acaba el bucle, mostramos mensaje de derrota
  alert(`Has perdido! El número era el ${password}`)
}


game(5, 0, 100)


//función auxiliar que devuelve un entero aleatorio dentro de un rango
function generatePassword(min, max){
  return Math.round(Math.random() * (max - min) + min)
}