console.log("Hola mundo mi primer programa en TS")

console.log("Hola Mundo en typescript")

//STINGS

// Comillas dobles
const str1: string = "Hola soy una cadena de comillas dobles";
// Comillas simples
const str2: string = "Hola soy una cadena de comillas simples";

// Template literals (backticks):
const nombre: string = 'Diego';
const edad: number = 36;

const str3: string = `Hola, mi nombre es ${nombre} y tengo ${edad} años`

//NUMBERS

// Números enteros:
const num1: number = 10;

// Notación decimal:
const num2: number = 3.141618;

// Notación exponencial:
const num3: number = 2.5e3; // 2.3 * 10^3 = 2500:

// Notación exponencial negativa:
const num4: number = 1.5e-2; // 0.015

// Hexadecimales (Base 16) utilizando el prefijo "0x":
const num5: number = 0xA; // valor decimal: 10

//Octales (Base 8) utilizandoel prefijo "0o":
const num6: number = 0o12;

// Booleans

const bool1: boolean = true;
const bool2: boolean = false;

// Undefined
// Declaracion de una variable con valor undefined

let variableUndefined: undefined;

// Asignación de valor undefined
variableUndefined = undefined;

// NULL
// declaración de una variable con null
let variableNull: null;

// Asignación de valor null
variableNull = null;

// OBJETO

const programador = {
    nombre: "Diego Ferro",
    casado: true,
    cursosEnYoutube: 4,
    cursos: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    viajeAEuropa: undefined,
    viajeAEstadosUnidos: null,
}

// Se utiliza la interfaz para tipar un objeto //

// ARRAYS

// Array de números:
const numeros: number[] = [1,2,3,4,5];

// Array de cadenas de texto:
const nombres: string[] = ["Juan", "Maria", "Pedro"];

// Array de booleanos:
const valoresBool: boolean[] =[true, false, true];

// etc

// ENUM o enumerados

enum DiasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

// ENUM con valores de cadena (string Enums):

enum Colores {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

//FUNCIONES

// Declaración de la función con tipado explicito:
function sumar(a: number, b: number): number {
    return a + b;
}
// funciones flecha con retorno implícito por Typescript
const dividir = (a:number, b:number) => a / b;

// Funciones con parámetros opcionales:

function saludar(nombre: string, edad?: number): string {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;        
    } else {
        return `Hola, mi nombre es ${nombre}`
    }
}

function saludar2(nombre: string, edad: number = 30): string{
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`
}


//CLASSES

class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

//INTERFACES

// una interfaz describe la forma de un objeto, es decir, los nombres y tipos de sus propiedades y métodos, pero no proporciona ninguna implementación concreta.

// Interface básica:
interface Persona {
    nombre: string;
    edad: number;
}

// Interface con propiedades opcionales:
interface Producto {
    nombre: string;
    precio: number;
    // Key opcional en el interface
    description?: string;
}

// Interface de funciones
interface Comparador {
    (a: number, b:number): boolean;
}

// interface para clases (class interfaces):
interface Personas {
    nombre: string;
    edad: number;
    saludar(): void;
}

//TYPES

type Numero = number;

//Type Básico Objeto literal:

type Persona1 = {
    nombre: string;
    edad: number;
}

//Type con propiedades opcionales:

type Producto1 = {
    nombre: string;
    precio: number;
    description?: string;
}

// Type para funciones:
type Comparador1 = {
    (a: number, b:number): boolean;
}

//Type para classes (class Types):
type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}

