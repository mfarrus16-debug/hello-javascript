/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function Entrada(edat) {
    if (edat < 18) { console.error(new Error("Ha de ser major d'edat"))} else {console.log("Pot passar!")}
}
Entrada(18)
// 2. Crea una función que utilice warn correctamente
function Entrada2(edat) {
    if (edat < 18) { console.warn("Cal firmar l'autorització de menors.")} else {console.log("Pot passar!")}
}
Entrada2(15)
// 3. Crea una función que utilice info correctamente
function Entrada3(edat) {
    if (edat < 18) { console.info("Pot ser perillós.")} else {console.log("Pot passar!")}
}
Entrada3(13)
// 4. Utiliza table
let person = [
    {nom:"Martí", poble: "Alcanó"},
    {nom:"Iker", poble: "Torrebesses"}
]
console.table(person)
// 5. Utiliza group
console.group("Nois:")
console.log("- Martí")
console.log("- Toni")
console.groupEnd()
console.group("Noies:")
console.log("- Gemma")
console.log("- Olga")
console.groupEnd()
// 6. Utiliza time
console.time("1")
console.log("calculem el temps")
console.timeEnd("1")
// 7. Valida con assert si un número es positivo
let numero = -3
console.assert(numero >= 0, "El numero ha de ser positiu.")
// 8. Utiliza count
console.count("km")
console.count("km")
console.count("km")
console.count("km")
console.count("km")
// 9. Utiliza trace
console.trace("Seguiment:") // mostra per on passa, en aquest cas no serveix per a res però si tenim moltes funcions, classe... podem executar-lo per veure el recorregut complet.
// 10. Utiliza clear
// console.clear()