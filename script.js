/*
Ejercicio #1
Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius
 y el programa muestre en una alert la temperatura en grados Fahrenheit.
 */

var temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

var temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 1.8) + 32;

alert("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit);

/*
Ejercicio #2

El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
**
***
****
*****
****
***
**
*

*/
var num = parseInt(prompt("Ingresa un número:"));

for (var i = 1; i <= num; i++) {

  var row = "";

  for (var j = 1; j <= i; j++) {

    row += "*";

  }

  console.log(row);
}

for (var i = num - 1; i >= 1; i--) {

  var row = "";

  for (var j = 1; j <= i; j++) {

    row += "*";

  }

  console.log(row);
}

/*
Ejercicio #3

Según un numero ingresado por el usuario, calcular su factorial

Ej:
Factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
factorial de 5 = 120

factorial de 10 = 10*9*8*7*6*5*4*3*2*1 = 3628800

*/

var numero = parseInt(prompt("Ingresa un número:"));
var resultado = 1;

for (var i = numero; i >= 1; i--) {

  resultado *= i;

}

console.log("El factorial de " + numero + " es: " + resultado);

/*
Ejercicio 4

ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
  - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual,
   restar el dinero extraído al saldo.
  - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual.
  - CONSULTAR SALDO: debe mostrar el saldo actual.
  - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados.
  - SALIR: debe terminar la ejecución del programa.

El programa debe mostrar el menú de opciones, y permitir ingresar una opción. 
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. 
Si se elige SALIR, debe terminar el programa. 
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, 
volver al menú de opciones. 
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder 
consultarse luego, por ejemplo:

ULTIMOS MOVIMIENTOS
 - Extraido: $50
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
 - otra operacion
 - otra operacion

 */
 let saldoInicial = 4000;
 let saldoActual = saldoInicial;
 let movimientos = "";
 let opcion = "";
 
 while (opcion !== "5") {
   opcion = prompt(
     "Bienvenido al Cajero Automático. Seleccione una opción:\n1 - Extraer.\n2 - Depositar. \n3 - Consultar Saldo.\n4 - Ver ultimos movimientos.\n5 - Salir."
   );
 
   switch (opcion) {
     case "1":
       let montoAExtraer = prompt("Ingrese el monto a extraer:");
       if (montoAExtraer > saldoActual) {
         alert("No cuenta con saldo suficiente para extraer esa cantidad");
       } else {
         saldoActual -= montoAExtraer;
         movimientos += "- Extraido: $" + montoAExtraer + "\n";
         alert("Se han extraido $" + montoAExtraer + ". Saldo actual: $" + saldoActual);
       }
       break;
 
     case "2":
       let montoADepositar = prompt("Ingrese el monto a depositar:");
       saldoActual += Number(montoADepositar);
       movimientos += "- Depositado: $" + montoADepositar + "\n";
       alert("Se han depositado $" + montoADepositar + ". Saldo actual: $" + saldoActual);
       break;
 
     case "3":
       alert("Su saldo actual es: $" + saldoActual);
       break;
 
     case "4":
       alert("Últimos movimientos:\n" + movimientos);
       break;
 
     case "5":
       alert("Gracias por utilizar nuestro Cajero Automático");
       break;
 
     default:
       alert("Opción inválida. Por favor seleccione una opción válida.");
       break;
   }
 }
 

/*

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34

 
*/

var cantidad = parseInt(prompt("Ingrese la cantidad de números de la secuencia de Fibonacci que desea ver:"));


var a = 0;
var b = 1;
console.log(a);
console.log(b);

for (var i = 2; i < cantidad; i++) {

  var c = a + b;
  console.log(c);
  a = b;
  b = c;

}






