"use strict";

//Hay tres opciones
//// Contar segundos de uno en uno y cuando sean múltimos de 5, imprimir
//// Contar los segundos de 5 en 5 e imprimir
//// Contar los segundo de uno en uno y cada 5 imprimir



// Función para imprimir el tiempo formateado por consola
function printTime(time){
  //Los segundo es el resto de convertir a minutos
  const segundos = time % 60

  //Convertimos a minutos
  const minutosTotales = Math.floor(time/60)

  //Los minutos son el resto de convertir a horas
  const minutos = minutosTotales % 60;

  //Convertimos a horas
  const horasTotales = Math.floor(minutosTotales / 60)

  // Las horas son lo que sobre de convertir a días
  const horas = horasTotales % 24

  //Convertimos a dias

  const dias = Math.floor(horasTotales/24)

  console.log(`Han pasado ${dias} ${dias!==1? "días": "dia"}, ${horas} ${horas!==1? "horas": "hora"}, ${minutos} ${minutos!==1? "minutos": "minuto"} y ${segundos} ${segundos!==1? "segundos": "segundo"}.`)
}

//Declaramos la variable del intervalo para poder pararlo
let counterInterval;


// Verión 1
// Contamos de uno en uno, imprimimos cuando sea multiplo de 5
console.log("//// VERSION 1 ////")

function time(){

  //Establecemos el contador a 0
  let counter = 0;

  //Iniciamos el intervalo
  counterInterval = setInterval(() => {
    
    //Incrementamos el contador de uno en uno
    counter++;

    //Si el contador es multiplo de 5, imprimimos
    if(counter % 5 === 0){

      printTime(counter)
    }

    //Ejecutamos cada segundo
}, 1000)
}

//time()



// Versión 2
//// Cada 5 segundos incrementar el tiempo de 5 en 5 e imprimir
console.log("")
console.log("///// VERSIÓN 2 /////")

function time2(){

  //Establecemso el contador a 0
  let counter = 0;

  //Iniciamos el intervalo
  counterInterval = setInterval(()=>{

    //Incrementamos de 5 en 5
    counter += 5;

    //Imprimimos
    printTime(counter)

    //Ejecutamos cada 5 segundos
  }, 5000)
}

//time2()


//Versión 3
//Dos intervalos diferentes: uno para el tiempo (cada segundo) y otro para imprimir (cada 5 segundos)
console.log("")
console.log("///// VERSIÓN 3/////")

//Declaramos el intervalo de imprimir para poder usarlo fuera

let printInterval;

function time3(){
  //Iniciamos el contador a 0
  let counter = 0;

  //Inicamos el intervalo del tiempo
  counterInterval = setInterval(()=>{

    //aumenta el contador de uno en uno
    counter++

    //Cada segundo
  }, 1000)

  //Iniciamos el intervalo de imprimir
  printInterval = setInterval(() => {
    //Llama a la función de imprimir
    printTime(counter)}, 
    
    //Cada 5 segundos
    5000)
}


time3()



function stop(num, letra){
  //Convertir a milisegundos

let msTime = num;

switch(letra){
  //Si es día pasamos a horas y continua...
case "D":
  msTime *= 24;

  //Si es hora, pasamos a minutos y continúa...
case "H":
  msTime *= 60;

  //Si es minutos, pasamos a segundos y continua...
case "M":
  msTime *= 60

// Si son segundos, pasamos a milisegundos
case "S":
  msTime *= 1000

}
// console.log(msTime)

setTimeout(()=>{
  //Parar el intervalo del tiempo
  clearInterval(counterInterval)

  //Si usamos la version 3, paramos el intervalo de imprimir
  clearInterval(printInterval)

  //Avisamos de que se ha parado
  console.log("Se ha detenido el programa")
}, msTime)

}

stop(20, "S")
