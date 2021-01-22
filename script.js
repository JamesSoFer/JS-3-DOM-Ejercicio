/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/

const ejercicioA = document.querySelector('h3');
console.log(ejercicioA.innerText);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/

const ejercicioB1 = document.querySelectorAll('li')[0];
console.log(ejercicioB1.innerText);

const ejercicioB2 = document.querySelectorAll('li')[3];
console.log(ejercicioB2.innerText);

/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/

const ejercicioC = document.querySelector("input[type= 'email']");
console.log(ejercicioC);

/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/

const ejercicioD = document.querySelectorAll('td')[2];
console.log(ejercicioD.innerText);

/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/

const ejercicioE = document.querySelectorAll('tr')[3];
console.log(ejercicioE.innerText);

/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
