// TYPE personalizados //
// Types, Interfaces y clases siempre inician con mayusculas //
type Coder = {
    name: string,
    tecnologies: string[],
    drinkCoffee: boolean | null | undefined,
    drinkTea?: boolean,
}

let coder: Coder = {
    name:"Yenni",
    tecnologies: ["Python", "HTML", "FASTAPI"],
    drinkCoffee: true,
    drinkTea: true
}

let coder2: Coder = {
    name: "Bart",
    tecnologies: ["Cobol"],
    drinkCoffee: null
}