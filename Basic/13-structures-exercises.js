/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let Animales = ["oso", "gato", "perro", "elefante", "león"]
// 2. Añade dos más. Uno al principio y otro al final
Animales.unshift("zebra")
Animales.push("jirafa")
console.log(Animales)
// 3. Elimina el que se encuentra en tercera posición
Animales.splice(3,1)
console.log(Animales)
// 4. Crea un set que almacene cinco libros
let library = new Set(["Harry Potter", "Nunca Terminar", "Habitos Atomicos", "La mente tambien juega", "odissea"])
// 5. Añade dos más. Uno de ellos repetido
library.add("odissea")
library.add("nike")
console.log(library)
// 6. Elimina uno concreto a tu elección
library.delete("odissea")
console.log(library)
// 7. Crea un mapa que asocie el número del mes a su nombre
let Any = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])
console.log(Any)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(Any.has(5))
console.log(Any.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let Verano = ["Junio", "Julio", "Agosto"]
Any.set("Verano", Verano)
console.log(Any)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let Menjar = ["Arrós", "Pollastre", "Cogombre"]
let SetMenjar = new Set(Menjar)
let Aliments = new Map([
    ["Menjar", SetMenjar]
])
console.log(Menjar)
console.log(SetMenjar)
console.log(Aliments)