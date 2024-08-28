let haveYouStudiedJavascript: boolean = false;

if (haveYouStudiedJavascript) {
    console.log("Puedes seguir viendo el curso de javascript")
} else {
    console.log("Primero tienes que ver de typescript")
};

let interMiami: number | null | undefined ;
let fcDallas: number = 11;
let juegaMessi: boolean = false
let palabras: string = "Una frase"

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    const motivo: string = '';
    if (juegaMessi) {
        console.log("Es porque Messi jugó")
    }
    if (!juegaMessi) {
        console.log("Es porque no jugó Messi")
    }
    if (equipo1 > equipo2 || juegaMessi) {
        console.log("gana Inter Miami")
    }
    if (equipo1 == equipo2) {
        console.log("Empatan")
    }
    if (equipo1 < equipo2) {
        console.log("Gana FC Dallas")
    }
}

jugar(interMiami, fcDallas, juegaMessi)


