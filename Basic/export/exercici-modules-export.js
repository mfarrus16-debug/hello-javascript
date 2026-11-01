export function dia(name) {
    console.log("Avui és ", name)
}
export const Martí = "Futur programador."
export class futbol {
    constructor(posició){
        this.posició = posició
    }

    pos() {
        console.log("la posició del jugador de futbol és ", this.posició, ".")
    }
}