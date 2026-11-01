/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 4. Importa una función  // 5. Importa una constante  // 6. Importa una clase
import {saludar, poble, gat} from "./31-modules-exercises.js"

saludar("MARTÍ")
console.log(poble)
let MyCat = new gat("Ramon")
MyCat.sound()

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultimport from "./31-modules-exercises.js"
//defaultimport()
//console.log(defaultimport)
let running = new defaultimport("running")
running.pres()

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {dia, Martí, futbol} from "./export/exercici-modules-export.js"
dia("dilluns")
console.log(Martí)
let delanter = new futbol("delanter")
delanter.pos()
