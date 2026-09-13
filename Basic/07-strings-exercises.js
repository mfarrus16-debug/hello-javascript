/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let Name = "Martí"
let saludació = "Hello " + Name + "!"
console.log(saludació)
// 2. Muestra la longitud de una cadena de texto
console.log(Name.length)
// 3. Muestra el primer y último carácter de un string
console.log(Name[0] + Name[4])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(Name.toUpperCase())
console.log(Name.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let presentació = `Hello
my 
name
is 
Martí
!`
console.log(presentació)
// 6. Interpola el valor de una variable en un string
let age = 16
let presentació2 = `Hello my name is ${Name} and I am ${age} years old.`
console.log(presentació2)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(presentació2.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(presentació2.includes("Martí"))
// 9. Comprueba si dos strings son iguales
let Name2 = "Martí"
console.log(Name == Name2)
console.log(presentació == presentació2)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(Name.length == Name2.length)
console.log(Name.length == presentació2.length)