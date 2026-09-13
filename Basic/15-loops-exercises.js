/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let i = 1
let num = 0
while (i <= 100) {
    num += i
    i ++
}
console.log(num)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let residu
for (let i = 1 ; i <= 50 ; i ++) {
    residu = i%2
    if (residu == 0) {
        console.log(i)
    }
} 
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let ArrayNum = [1,2,3,4,5,6,7,8,9]
for (let value of ArrayNum) {
    console.log(value)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let word = "elefant"
let vocal = 0
for (let value of word) {
    if (value == "a" || value == "e" || value == "i"|| value == "o"|| value == "u") {
        vocal += 1
    }
}
console.log(vocal)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let product = 1
for (let value of ArrayNum) {
    product *= value
}
console.log(product)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let table5
for (let i = 1; i <= 10; i++) {
    table5 = 5*i
    console.log(table5)
}
// 8. Usa un bucle para invertir una cadena de texto
let invertido = ""
for (let i = word.length - 1; i >= 0; i--) {
    invertido += word[i]
}

console.log(invertido)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
let siguiente
for (let i = 0; i < 10; i++) {
    console.log(a)

    siguiente = a + b
    a = b
    b = siguiente
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let list = [1,34,23,56,2,9,10,11,45]
for (let value of list) {
    if (value > 10) {
        console.log(value)
    }
}