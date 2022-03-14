"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};


console.log("///// CON IF ////")


function printAge(peopleObj){

  //Recorremos cada elemento del opbjeto
for(const nombre in peopleObj){

  //guardamos la edad en una variable para que sea más cóodo
  const age = peopleObj[nombre]

  //Comprobamos que estamos trbajando con los datos correctos
  /* console.log(nombre, age)*/


  //Sacamos la frase que corresponda según la edad
   if(age >= 18){
    console.log(`${nombre} es mayor de edad` )

  } else {
    console.log(`${nombre} es menor de edad` )

  } 


 }
}

printAge(people)


console.log("")
console.log("///// CON TERNARIO////")


function printAgeTernario(peopleObj){

  //Recorremos cada elemento del objeto
  for(const nombre in peopleObj){
    //Guardamos la edad en una variable para que sea más comodo
    const age = peopleObj[nombre];

    //Comprobamos que las variables tienen lo que tienen que tener
    /* console.log(nombre, age) */


    //Construimos la frase y la sacamos por consola
    console.log(`${nombre} es ${age >= 18? "mayor" : "menor"} de edad`)

  }
}

printAgeTernario(people)