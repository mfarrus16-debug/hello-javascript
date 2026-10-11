/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class poble {
    constructor(província, país) {
        this.província = província
        this.país = país
    }
}
let Alcanó = new poble("Lleida", "Catalunya")


// 2. Añade un método a la clase que utilice las propiedades
class poble2 {
    constructor(província, país) {
        this.província = província
        this.país = país
    }
    presentació() {
        console.log("És un poble.")
    }
}
let Alcanó2 = new poble2("Leida", "Catalunya")


// 3. Muestra los valores de las propiedades e invoca a la función
console.log(Alcanó)
console.log(Alcanó2)
Alcanó2.presentació()

// 4. Añade un método estático a la primera clase
class poble3 {
    constructor(província, país) {
        this.província = província
        this.país = país
    }
    static descripció(habitants) {
        console.log("És una ciutat petita, amb " + habitants +   " habitants.")
    }
}

// 5. Haz uso del método estático
poble3.descripció(300)
// 6. Crea una clase que haga uso de herencia
class pobleEncantador extends poble {
    description() {
        console.log("És un poble encantador.")
    }
}
let Alcanó3 = new pobleEncantador("Lleida", "Catalunya")
console.log(Alcanó3)
Alcanó3.description()
// 7. Crea una clase que haga uso de getters y setters
class poble4 {
    constructor(país) {
        this._país = país
    }
    get país() {
        return this._país
    }
    set país(nouNom) {
        this._país = nouNom
    }
}
let getsetpoble = new poble4 ("Espanya")
console.log(getsetpoble.país)
getsetpoble.país = "Catalunya"
console.log(getsetpoble.país)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class poble5 {

    #país

    constructor(país) {
        this.#país = país
    }

    get país() {
        return this.#país
    }

    set país(nouNom) {
        this.#país = nouNom
    }
}
let getsetpoble2 = new poble5 ("Catalunya")

console.log(getsetpoble2)
console.log(getsetpoble2.país)

// 9. Utiliza los get y set y muestra sus valores
console.log(getsetpoble2)
console.log(getsetpoble2.país)

// 10. Sobrescribe un método de una clase que utilice herencia 
class Alumne {
    subjecte() {
        console.log("No té assignatura preferida.")
    }
}
class AlumneMatemàtic extends Alumne {
    subjecte() {
        console.log("La seva assignatura preferida són les mates.")
    }
}
class AlumneRandom extends Alumne {
    
}

let a = new AlumneMatemàtic
let b = new AlumneRandom
let c = new Alumne

a.subjecte()
b.subjecte()
c.subjecte()