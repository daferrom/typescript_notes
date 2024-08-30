// Sí, en TypeScript puedes tener arreglos que contengan múltiples tipos de valores. Esto se puede lograr utilizando un tipo de unión o tuplas.

// ### 1. **Tipo de unión**:
//    Puedes definir un arreglo que contenga elementos de diferentes tipos usando un tipo de unión. Por ejemplo:


let mixedArray: (number | string | boolean)[] = [1, "hello", true];


//    En este caso, `mixedArray` puede contener números, cadenas de texto y valores booleanos.

// ### 2. **Tuplas**:
//    Si conoces de antemano la estructura y el orden de los tipos dentro del arreglo, puedes utilizar tuplas. Por ejemplo:


let tupleArray: [number, string, boolean] = [42, "example", false];


//    Aquí, `tupleArray` siempre debe contener un número, seguido de una cadena de texto, y luego un booleano.

// ### 3. **Arreglos de objetos con diferentes propiedades**:
//    También puedes tener un arreglo de objetos donde cada objeto puede tener diferentes propiedades y tipos:


type MixedObject = { id: number, value: string } | { id: number, active: boolean };

let mixedObjectArray: MixedObject[] = [
    { id: 1, value: "first" },
    { id: 2, active: true }
];


//    En este caso, el arreglo `mixedObjectArray` puede contener objetos con diferentes estructuras.

// Estos son algunos ejemplos de cómo manejar arreglos con múltiples tipos en TypeScript.