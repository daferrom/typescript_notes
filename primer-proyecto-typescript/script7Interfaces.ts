// INTERFACES // 

interface Car {
    name: string,
    characteristics: string[],
    isUsed: boolean,
    ownerName?: string,
    yearModel: number,
}

const car1: Car = {
    name: "Ford Mustang",
    characteristics:[ "Motor V8", "manual"],
    isUsed: true,
    ownerName: "Pepito Perez",
    yearModel: 1982
}

const car2: Car = {
    name: "Lamborgini adventor",
    characteristics: ["Motor V8", "automatic"],
    isUsed: false,
    yearModel: 2023
    
}

function printCarName(car: Car = car2 ){
    const { name }= car
    console.log(`El nombre del carro es ${name}`)
}
console.log(car1)
console.log(car2)

printCarName()

printCarName(car1)