/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
console.log("Hola Alcanó!")
// 2. Escribe un comentario en varias líneas
console.log("Hola Alcanó")
console.log("Avui és 12/09/2026")
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let Name = "Martí"
let age = 16
let man = true 
let Undefined
let Null = null
let MySymbol = Symbol("x")
let MyBigInt = BigInt(9393939393939393939393939393939393939393939393939393939)
// 4. Imprime por consola el valor de todas las variables
console.log(Name)
console.log(age)
console.log(man)
console.log(Undefined)
console.log(Null)
console.log(MySymbol)
console.log(MyBigInt)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof Name)
console.log(typeof age)
console.log(typeof man)
console.log(typeof Undefined)
console.log(typeof Null)
console.log(typeof MySymbol)
console.log(typeof MyBigInt)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
Name = "Alcanó"
age = 2026
man = false
MySymbol = Symbol("y")
MyBigInt = BigInt(77474775656475654747656446375)
console.log(Name)
console.log(age)
console.log(man)
console.log(MyBigInt)
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
Name = 13
age = "old"
man = null
MySymbol = 22455473457556856723563462354568n
MyBigInt = Symbol("Martí")
Undefined = "Martí"
Null = undefined
console.log(Name)
console.log(age)
console.log(man)
console.log(Undefined)
console.log(Null)
console.log(MySymbol)
console.log(MyBigInt)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const Name2 = "Martí"
const age2 = 16
const man2 = true 
const undefined2 = undefined
const Null2 = null
const MySymbol2 = Symbol("x")
const MyBigInt2 = BigInt(9393939393939393939393939393939393939393939393939393939)
console.log(Name2)
console.log(age2)
console.log(man2)
console.log(undefined2)
console.log(Null2)
console.log(MySymbol2)
console.log(MyBigInt2)
// 9. A continuación, modifica los valores de las constantes
//Name2 = "Alcanó"
//age2 = 20
//man2 = false 
//undefined2 = 30
//Null2 = 15
//MySymbol2 = Symbol("y")
//MyBigInt2 = BigInt(9393939929934393939393939393939393939393939393939393939393939)
console.log(Name2)
console.log(age2)
console.log(man2)
console.log(undefined2)
console.log(Null2)
console.log(MySymbol2)
console.log(MyBigInt2)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse