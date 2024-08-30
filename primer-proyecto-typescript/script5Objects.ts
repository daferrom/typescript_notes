// OBJETOS

let programmer= {
    name: "Diego",
    tecnologies: ["React", "Vue", "Angular"],
    drinkCoffee: true
}

/* Si se sobreescriben los valores del objeto con otros keys
typescript solo permite la reasignacion con valores del mismo type
toma el primer objeto como plantilla del segundo
*/

programmer = {
    name: "Homero",
    tecnologies: [""],
    // drinkCoffee: "Si"
    drinkCoffee: false
}

console.log(programmer)