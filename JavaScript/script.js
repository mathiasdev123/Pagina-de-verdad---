// Variables

let variable = "texto";

console.log(variable);

// Prompts

let pregunta = prompt("Pregunta?");

alert("Tu respuesta fue: " + pregunta);

// Operadores de asignacion

let variableAsignada = 1;

console.log(variableAsignada);

variableAsignada += 2;

console.log(variableAsignada);

variableAsignada -= 3;

console.log(variableAsignada);

variableAsignada *= 4;

console.log(variableAsignada);

variableAsignada /= 5;

console.log(variableAsignada);

variableAsignada **= 6;

console.log(variableAsignada);

variableAsignada %= 7;

console.log(variableAsignada);

// Operadores aritmeticos

let variableCalculadaUno = 8;

let variableCalculadaDos = 9;

console.log(variableCalculadaDos + variableCalculadaDos);

console.log(variableCalculadaDos - variableCalculadaDos);

console.log(variableCalculadaDos * variableCalculadaDos);

console.log(variableCalculadaDos / variableCalculadaDos);

console.log(variableCalculadaDos ** variableCalculadaDos);

console.log(variableCalculadaDos % variableCalculadaDos);

console.log(++variableCalculadaUno);

console.log(--variableCalculadaUno);

console.log(variableCalculadaUno++);

console.log(variableCalculadaUno--);

console.log(-variableCalculadaUno);

// Concatenacion

let variableConcatenadaUno = "tex";

let variableConcatenadaDos = "to";

console.log(`${variableConcatenadaUno}${variableConcatenadaDos}`);

let variableConcatenadaNumericaUno = "1";

let variableConcatenadaNumericaDos = 0;

console.log(`${variableConcatenadaNumericaUno}${variableConcatenadaNumericaDos}`);

// Operadores de comparacion

let variableComparadaUno = 11;

let variableComparadaDos = 12;

console.log(variableComparadaUno == variableComparadaDos);

console.log(variableComparadaUno === variableComparadaDos);

console.log(variableComparadaUno != variableComparadaDos);

console.log(variableComparadaUno !== variableComparadaDos);

console.log(variableComparadaUno > variableComparadaDos);

console.log(variableComparadaUno < variableComparadaDos);

console.log(variableComparadaUno >= variableComparadaDos);

console.log(variableComparadaUno <= variableComparadaDos);

// Operadores logicos

let variableLogicaUno = true;

let variableLogicaDos = false;

console.log(variableLogicaUno && variableLogicaDos);

console.log(variableLogicaUno || variableLogicaDos);

console.log(!variableLogicaUno);

// Condicionales

let conditionalVariable = prompt("Write a number:");

if (conditionalVariable >= 10000) {
    alert("That's a very large number.");
}
else if (conditionalVariable >= 1000 && conditionalVariable < 10000) {
    alert("It's a big number.");
}
else if (conditionalVariable >= 100 && conditionalVariable < 1000) {
    alert("It is a medium number.");
}
else if (conditionalVariable >= 10 && conditionalVariable < 100) {
    alert("It's a small number");
}
else {
    alert("It's a very small number.");
}

// Arrays

let array = ["Element 0", "Element 1", 1, 1.0, true];

console.log(array);

console.log(array[0]);

console.log(array[1]);

console.log(array[2]);

console.log(array[3]);

console.log(array[-1]);

// Arrays asociativos

let pc = {
    nombre: "HP Pavilion Laptop 15-eg0xxx",
    cpu: "Intel Core I5",
    gpu: "Intel IRISXe Graphics",
    ram: "8GB DDR4",
    almacenamiento: "512GB SSD",
    sistemaOperativo: "Windows 11 home single language",
    pantalla: "15.6 pulgadas FHD",
    precio: 1200
};

console.log(pc["nombre"]);

console.log(pc["cpu"]);

console.log(pc["gpu"]);

// sentencia while

let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}

// do while

let contadorDoWhile = 0;

do {
    console.log(contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile < 10);

// break

let contadorBreak = 0;

while (true) {
    console.log(contadorBreak);
    contadorBreak++;
    if (contadorBreak >= 10) {
        break;
    }
}

// for

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for in

let arrayForIn = [1, 2, 3, 4, 5];

for (let contadorForIn in arrayForIn) {
    console.log(contadorForIn);
}

// for of

let arrayForOf = [1, 2, 3, 4, 5];

for (let contadorForOf of arrayForOf) {
    console.log(contadorForOf);
}

// label

let arrayLabel = [1, 2, 3, 4, 5];

let arrayLabel2 = [1, 2, 3, 4, arrayLabel, 5];

etiquetaParaBucle:
for (let contadorLabel2 of arrayLabel2) {
    console.log(contadorLabel2);

    if (contadorLabel2 == 4) {
        for (let contadorLabel of arrayLabel) {
            console.log(contadorLabel);
            break etiquetaParaBucle;
        }
    }
}

// funciones

function texto(){
    console.log("texto");
}

texto();

// return

function funcionConReturn(){
    return "texto";
}

console.log(funcionConReturn());

// parametros

function funcionConParametro(nombre){
    alert(`Hola, ${nombre}`);
}

funcionConParametro(prompt("¿Cual es tu nombre?"));

// funciones flecha

const funcionFlecha = () => console.log("texto");

funcionFlecha();

// POO

class Clase{
    constructor(atributo){
        this.atbt = atributo;
    }

    metodo() {
        console.log("texto");
    }
}

const objeto = new Clase("atributo");

objeto.metodo();

class Subclase extends Clase{
    constructor(atributo, otroAtributo){
        super(atributo);
        this.otatbt = otroAtributo;
        this.atbtn = null;
    }
    static metodoEstatico(){
        console.log("Texto");
    }
    set cambiarAtbtn(newAtributo){
        this.atbtn = newAtributo;
    }
    get obtenerAtbtn(){
        return this.atbtn
    }
}

const objetoDeSubclase = new Subclase("atributo", "otro atributo");

Subclase.metodoEstatico();

objetoDeSubclase.cambiarAtbtn = "nuevo atributo";

console.log(objetoDeSubclase.atbtn);
console.log(objetoDeSubclase.obtenerAtbtn);

// concat

let cadenaConcat = "tex";

console.log(cadenaConcat.concat("to"));

// startstwith

let cadenastartswith = "texto";

console.log(cadenastartswith.startsWith("tex"));

// endswith

let cadenaEndsWith = "texto";

console.log(cadenaEndsWith.endsWith("to"));

// includes

let cadenaIncludes = "texto";

console.log(cadenaIncludes.includes("tex"));

// indexof

let cadenaIndexOf = "texto";

console.log(cadenaIndexOf.indexOf("t"));

// lastindexof

let cadenaLastIndexOf = "texto";

console.log(cadenaLastIndexOf.lastIndexOf("t"));

// padstart

let cadenaPadStart = "to";

console.log(cadenaPadStart.padStart(5, "tex"));

// padend

let cadenaPadEnd = "tex";

console.log(cadenaPadEnd.padEnd(5, "to"));

// repeat

let cadenaRepeat = "texto";

console.log(cadenaRepeat.repeat(2));

// split

let cadenaSplit = "t,e,x,t,o";

console.log(cadenaSplit.split(","));

// substring

let cadenaSubstring = "textoto";

console.log(cadenaSubstring.substring(0, 5));

// tolowercase

let cadenaToLowerCase = "TEXTO";

console.log(cadenaToLowerCase.toLowerCase());

// touppercase

let cadenaToUpperCase = "TEXTO";

console.log(cadenaToUpperCase.toUpperCase());

// tostring

let numeroToString = 1;

console.log(numeroToString.toString())

// trim

let cadenaTrim = " Texto ";

console.log(cadenaTrim.trim());

// trimstart

let cadenaTrimStart = " Texto ";

console.log(cadenaTrimStart.trimStart());

// trimend

let cadenaTrimEnd = " Texto ";

console.log(cadenaTrimEnd.trimEnd());

// pop

let arrayPop = [1, 2, 3, 4, 5];

console.log(arrayPop.pop());

// shift

let arrayShift = [1, 2, 3, 4, 5];

console.log(arrayShift.shift());

// push

let arrayPush = [1, 2, 3, 4];

console.log(arrayPush.push(5))

// reverse

let arrayReverse = [5, 4, 3, 2, 1];

console.log(arrayReverse.reverse());

// unshift

let arrayunShift = [1, 2, 3, 4, 5];

console.log(arrayunShift.unshift(0));

// sort

let arraySort = [3, 1, 2, 5, 4];

console.log(arraySort.sort());

// splice

let arraySplice = [1, 2, 3, 4, 5];

console.log(array)

// join

let arrayJoin = [1, 2, 3, 4, 5];

console.log(arrayJoin.join());

// slice

let arraySlice = [1, 2, 3, 4, 5];

console.log(arraySlice.slice(0, 3));

// filter

let arrayFilter = [1, 2, 3, 4, 5];

arrayFilter.filter(variableFilter => console.log(variableFilter));

// foreach

let arrayForEach = [1, 2, 3, 4, 5];

arrayForEach.forEach(variableForEach => console.log(variableForEach));

// sqrt

console.log(Math.sqrt(5));

// cbrt

console.log(Math.cbrt(5));

// max

console.log(Math.max(3, 1, 2, 5, 4));

// min

console.log(Math.min(3, 1, 2, 5, 4));

// random

console.log(Math.random());

// round

console.log(Math.round(2.5));

// floor

console.log(Math.floor(2.5));

// fround

console.log(Math.fround(2.5));

// trunc

console.log(Math.trunc(2.5));

// PI

console.log(Math.PI);

// SQRT1_2

console.log(Math.SQRT1_2);

// E

console.log(Math.E)

// LN2

console.log(Math.LN2)

// LN10

console.log(Math.LN10)

// LOG2E

console.log(Math.LOG2E)

// LOG10E

console.log(Math.LOG10E)

// assert

console.assert(1 == 1);

// error

console.error("Error inofensivo");

// info

console.info("Texto");

// table

console.table([1, 2, 3, 4, 5]);

// warn

console.warn("Advertencia, algo no esta bien. Nah mentira, esto es un simulacro");

// dir

console.dir([1, 2, 3, 4, 5]);

// count

console.count();
console.count();
console.count();
console.count();
console.count();

console.countReset();

// group

console.group("Grupo 1");

console.log("Texto del grupo 1");

console.groupEnd();

console.group("Grupo 2");

console.log("Texto del grupo 2");

console.groupEnd();

// groupcollapsed

console.groupCollapsed("Grupo 1 colapsado");

console.log("Texto del grupo 1");

console.groupEnd();

console.groupCollapsed("Grupo 2 colapsado");

console.log("Texto del grupo 2");

console.groupEnd();

// time

console.time();

function funcionConTime(params) {
	console.timeLog();
}

funcionConTime();
funcionConTime();
funcionConTime();
funcionConTime();
funcionConTime();

console.timeEnd();

// Como poner estilo al texto

console.log("%cTexto", "color: red; font-size: 20px; font-weight: bold; background-color: yellow; padding: 5px; border: 2px solid black; border-radius: 5px;");

// getelementbyid

let parrafo = document.getElementById("parrafo");

console.log(parrafo);

// getelementsbytagname

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);