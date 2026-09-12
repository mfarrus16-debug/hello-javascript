/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 10
let b = 5
let suma = a+b
let resta = a-b
let multiplicació = a*b
let potència = a**b
let divisió = a/b
let residu = a%b
console.log(suma)
console.log(resta)
console.log(multiplicació)
console.log(potència)
console.log(divisió)
console.log(residu)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma2 = suma += b
let resta2 = resta -= b
let multiplicació2 = multiplicació *= b
let potència2 = potència **= b
let divisió2 = divisió /= b
let residu2 = residu %= b
console.log(suma2)
console.log(resta2)
console.log(multiplicació2)
console.log(potència2)
console.log(divisió2)
console.log(residu2)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 4)
console.log(4 < 7)
console.log(2 >= 2)
console.log(2 <= 4)
console.log(2 == "2")
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 === "2")
console.log(2 !== 2)
console.log(2 == 4)
console.log(2 != "2")
console.log(undefined === null)
// 5. Utiliza el operador lógico and
console.log(15>10 && 3<7)
// 6. Utiliza el operador lógico or
console.log(11>0 || 4<3)
// 7. Combina ambos operadores lógicos
console.log(15<10 && 3>1 || 1 == 1)
// 8. Añade alguna negación
console.log(1 != 3)
// 9. Utiliza el operador ternario
let man = true
man ? console.log("És un home.") : console.log("No és un home.")
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(3+5 > 2 && 5-15 > 3 || !(3 >= 4))