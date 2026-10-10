/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b
}
let resultat = suma(5, 3)
console.log(resultat)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numeros = [1,2,3,4,5]
let sol = 0
function major() {
    for (let value of numeros) {
        if (value > sol) {
                sol = value
        }
    }
    console.log(sol)
}
major()
//-------
numeros.forEach(function (value) {
    if (value > sol) {
        sol = value
    }
})
console.log(sol)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let word = "elefant"
let vocal = 0
function vocals() {
    for (let value of word) {
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
            vocal ++ 
        }
    }
    console.log(vocal)
}
vocals()
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let list = ["martí", "Alcanó", "javascript"]
function majus() {
    let final = []
    for (let value of list) {
        final.push(value.toUpperCase())
    }
    return final
}
list = majus()
console.log(list)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primer(x) {
    if (x < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false
        }
    }
    return true
}

console.log(primer(2))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function conte() {
    let list1 = ["hola", "adeu"]
    let list2 = [ "hola", "bon dia"]
    let listF = new Set()
    for (let value of list1) {
        listF.add(value)

    }
    for (let value of list2) {
        listF.add(value)
    }
    let list = [...listF]
    console.log(list)
}
conte()

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumpar() {
    let numeros = [1,2,3,4,5]
    let suma = 0
    for (let value of numeros) {
        if (value % 2 == 0) {
            suma += value
        }
    }
    console.log(suma)
}
sumpar()
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function quadrat() {
    let numeros2 = [1,2,3,4,5]
    let numFINAL = []
    for (let value of numeros2) {
        numFINAL.push(value)
    }
    console.log(numFINAL)
}
quadrat()

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invers(nom) {
    let lletres = []
    for (let value of nom) {
        lletres.push(value)
    }
    let nomFinal = ""
    for (let i = lletres.length - 1; i >= 0; i--) {
        nomFinal += lletres[i];
    }
    console.log(nomFinal)
}
invers("Martí")
invers("Alcanó")
//////////////////////////////////////////////////////////////////////////////

function invers2(nom) {
    console.log(nom.split("").reverse().join(""));
}

invers2("Martí");
invers2("Hola");

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
    let numFinal = 1
    for (let i = numero; i>0; i--) {
        numFinal *= i
    }
    console.log(numFinal)
}
factorial(5)
factorial(0)
