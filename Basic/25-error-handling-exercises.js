/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    console.log(hola)
} catch {
    console.log("S'ha produit un error.")
}
// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(hola)
} catch {
    console.log("S'ha produit un error.")
} finally {
    console.log("El codi ha acabat.")
}
// 3. Lanza una excepción genérica
try {
    sum()
} catch (error) {
    console.log("Error: " + error.message)
}
// 4. Crea una excepción personalizada
class AnimalsError extends Error {
    constructor(message, paraula) {
        super(message)
        this.paraula = "AnimalError"
    }
}

// 5. Lanza una excepción personalizada
let animals = ["lleó", "elefant", "girafa"]
let word = "lleó"
try {
    if (animals.includes(word)) {
        throw new AnimalsError("Paraula NO vàlida")
    } else {console.log("Paraula vàlida.")
    } 
} catch (error) {
        console.log(error.message)
}
// 6. Lanza varias excepciones según una lógica definida // 7. Captura varias excepciones en un mismo try-catch
word = ""
try {
    if (animals.includes(word)) {
        throw new AnimalsError("Paraula NO vàlida")
    } else if (word == "") {
        throw new Error("Ha de ser una paraula")
    } else {
        console.log("Paraula vàlida.")
    } 
} catch (error) {
    console.log(error.message)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valors = [1.25, 5, "Martí", true]
let numero
for (let valor of valors) {
    try{
        numero = parseFloat(valor)
        console.log(numero)
    } catch (error) {
        console.log(error.message)
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadError extends Error {
    constructor(propietat) {
    super(`La propiedad "${propietat}" no existe en el objeto`);
    this.name = "PropiedadNoEncontradaError";
}
}
function comprovarPropietat(object, propietat) {
    if (!Object.hasOwn(object, propietat)) {
        throw new PropiedadError(propietat);
}}
let person = {
    name: "Martí",
    edat: 16
}
try {
    comprovarPropietat(person, "email")
    console.log("existeix.")
} catch (error) {
    console.log(error.message)
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
for (let i = 0; i < 10; i++) {
    try {
        console.log(Martí)
    } catch (error) {
        console.log(error.message, " intent ", i)
    }
}