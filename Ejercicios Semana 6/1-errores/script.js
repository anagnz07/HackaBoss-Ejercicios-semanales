"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

function validateDNI(dni){

  try{

    //1- Lo que se ha introducido es un string con 10 caracteres.
    console.log(typeof dni, dni.length)

    //Si no cumple, lanzamos error
    if(typeof dni !== "string" || dni.length !== 10 ){
      
      throw new Error("Formato inadecuado")
    }

    //2- Si separamos por el guión tiene dos partes.
    const partes = dni.split("-")

    console.log(partes)

    if(partes.length !== 2){
      throw new Error("Debe tener un único guion")
    }


    //Hacemos destructuring de las partes por comodidad
    const [num, letra] = partes

    //3- La primera parte (antes del guion) son 8 números.
    console.log(num.length, num)
    if(num.length !== 8 || isNaN(num)){
      throw new Error("La primera parte deben ser 8 números")
    }

    //4- La segunda parte (después del guion) es un único caracter y no es un número.
    
  console.log(letra)

  if(letra.length !== 1 || !isNaN(letra)){
    throw new Error("La segunda parte debe ser una letra")
  }
    

  //5- La letra se corresponde con la que debería, según el número.

  console.log(letras[num%23], letra)

  //Calculamos la letra que debería llevar (según el resto de dividir entre 23) y comprobamos si coincide 
  if(letras[num % 23] !== letra.toUpperCase()){
    throw new Error("La letra no se corresponde")
  }

    console.log("DNI válido")
  }catch (e){
console.error("Se ha producido un error: " + e.message)
  }
}

validateDNI("00008397-w")