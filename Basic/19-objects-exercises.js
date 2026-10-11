/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let Martí = {
    name: "Martí",
    age: 16,
    poble: "Alcanó"
}

// 2. Accede y muestra su valor
console.log(Martí.name)
console.log(Martí.age)
console.log(Martí.poble)

// 3. Agrega una nueva propiedad
Martí.esport = "running"
console.log(Martí.esport)

// 4. Elimina una de las 3 primeras propiedades
delete Martí.poble
console.log(Martí)

// 5. Agrega una función e invócala
Martí.saludació = function () {
    console.log("Hola, amic!")
}
Martí.saludació()
// 6. Itera las propiedades del objeto
for (let key in Martí) {
    console.log(key + ": " + Martí[key])
}
// 7. Crea un objeto anidado
Martí.Alcanó =  {
    província: "Lleida",
    país: "Catalunya"
}
console.log(Martí.Alcanó)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(Martí.Alcanó.província)
console.log(Martí.Alcanó.país)

// 9. Comprueba si los dos objetos creados son iguales
console.log(Martí == Martí.Alcanó)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(Martí.name == Martí.esport)