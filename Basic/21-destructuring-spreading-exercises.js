/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let MyArray = [1,2,3,4]
let [MyArray0, MyArray1] = MyArray
console.log(MyArray0)
console.log(MyArray1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [MyArray3 = 0, MyArray4 = 0, , , MyArray5 = 0] = MyArray
console.log(MyArray3)
console.log(MyArray4)
console.log(MyArray5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let Martí = {
    name: "Martí",
    age: 16,
    poble: "Alcanó"
}
let {name, age} = Martí
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: name1, age: age1, poble: poble1} = Martí
console.log(name1)
console.log(age1)
console.log(poble1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let color = {
    primari: {
        1: "roig",
        2: "groc",
        3: "blau"
    },
    secundari: "verd"
}
let {primari: {1: colorPrimari1, 2: colorPrimari2}} = color
console.log(colorPrimari1)
console.log(colorPrimari2)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let animals = ["elefant", "jirafa", "lleó"]
let FinalArray = [...MyArray, ...animals]
console.log(FinalArray)

// 7. Usa propagación para crear una copia de un array
let wildAnimal = [...animals]
console.log(wildAnimal)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let expressions = {
    standar: "Hello",
    formal: "Welcome",
    informal: "hi!"
}
let person = {...Martí, ...expressions}
console.log(person)

// 9. Usa propagación para crear una copia de un objeto
let persona2 = {...Martí}
console.log(persona2)

// 10. Combina desestructuración y propagación
// let animals = ["elefant", "jirafa", "lleó"]
let [sala1 = "buida", sala2 = "buida", sala3 = "buida", sala4 = "buida" , sala5 = "buida"] = animals
let zoo = [...animals, sala4, sala5 ]
console.log(zoo)