/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function saludar(name) {
    console.log("Hola " + name + ", com estas?")
}
// 2. Exporta una constante
export const poble = "Alcanó"
// 3. Exporta una clase
export class gat {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El gos "+ this.name +" fa seroll.")
    }
    run() {
        console.log("El gos "+ this.name +" correr.")
    }
}


// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
//export default function Alcanó() {
//    console.log("Alcanó, el millor poble del món.")
//}


//const euler = 2.71828
//export default euler



export default class esport {
    constructor(name) {
        this.name = name
    }

    pres() {
        console.log("Aquest esport és el", this.name, ".")
    }
}

// 9. Exporta una función, una constante y una clase desde una carpeta
// fet a la carpeta "exports".