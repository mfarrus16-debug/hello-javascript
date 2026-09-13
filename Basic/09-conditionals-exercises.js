/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Martí"
if (name == "Martí") {
    console.log(name)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = "123"
if (name == "Martí" && password == "123") {
    console.log("Usuari i contrasenya correctes.")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 1
if (num > 0) {
    console.log("Positiu")
} else if (num < 0) {
    console.log("Negatiu")
} else if (num == 0) {
    console.log("Zero")
} else {
    console.log("No és un numero.")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
let missing
if (age >= 18) {
    console.log("Major d'edat.")
} else if (age < 18) {
    missing = 18 - age
    console.log(`Menor d'edat, li falten ${missing} anys.`)
} else {
    console.log("No és un numero.")
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = age >= 18 ? "Major d'edat" : "Menar d'edat"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Abril"
if (mes == "Enero" || mes == "Febrero" || mes == "Diciembre") {
    console.log("Invierno")
} else if (mes == "Marzo" || mes == "Mayo"  || mes == "Abril") {
    console.log("Primavera")
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto") {
    console.log("Verano")
} else if (mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre") {
    console.log("Otoño")
} else {
    console.log("No és un mes.")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "Enero" || mes == "Diciembre" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre") {
    console.log(31)
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log(30)
} else if (mes == "Febrero") {
    console.log(28)
} else {
    console.log("No és un mes.")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "English"
let resposta
switch (idioma) {
    case "Català":
        resposta = "Hola"
        break
    case "Castellano":
        resposta = "Hola"
        break
    case "English":
        resposta = "Hello"
        break
    default:
        resposta = `No és ni "Català" ni "Castellano" ni "English"`
}
console.log(resposta)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case "Enero":
    case "Febrero":
    case "Diciembre":
        resposta = "Invierno"
        break
    case "Marzo": 
    case "Mayo": 
    case "Abril":
        resposta = "Primavera"
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        resposta = "Verano"
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        resposta = "Otoño"
        break
    default:
        resposta = "No és un mes."
}
console.log(resposta)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case "Enero":
    case "Diciembre":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
        resposta = 31
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        resposta = 30
        break
    case "Febrero":
        resposta = 28
        break
    default:
        resposta = "No és un mes."
}
console.log(resposta)