// Variables

let variable = "Texto";

console.log(variable);

// Prompts

let pregunta = prompt("Pregunta?");

alert("Tu respuesta fue: " + pregunta);

// Operadores de asignacion

let variable_asignada = 1;

console.log(variable_asignada);

variable_asignada += 2;

console.log(variable_asignada);

variable_asignada -= 3;

console.log(variable_asignada);

variable_asignada *= 4;

console.log(variable_asignada);

variable_asignada /= 5;

console.log(variable_asignada);

variable_asignada **= 6;

console.log(variable_asignada);

variable_asignada %= 7;

console.log(variable_asignada);

// Operadores aritmeticos

let variable_calculada_uno = 8;

let variable_calculada_dos = 9;

console.log(variable_calculada_dos + variable_calculada_dos)

console.log(variable_calculada_dos - variable_calculada_dos)

console.log(variable_calculada_dos * variable_calculada_dos)

console.log(variable_calculada_dos / variable_calculada_dos)

console.log(variable_calculada_dos ** variable_calculada_dos)

console.log(variable_calculada_dos % variable_calculada_dos)

console.log(++variable_calculada_uno)

console.log(--variable_calculada_uno)

console.log(variable_calculada_uno++)

console.log(variable_calculada_uno--)

console.log(-variable_calculada_uno)

// Concatenacion

let variable_concatenada_uno = "Tex";

let variable_concatenada_dos = "to";

console.log(`${variable_concatenada_uno}${variable_concatenada_dos}`);

let variable_concatenada_numerica_uno = "1";

let variable_concatenada_numerica_dos = 0;

console.log(`${variable_concatenada_numerica_uno}${variable_concatenada_numerica_dos}`);

// Operadores de comparacion

let variable_comparada_uno = 11;

let variable_comparada_dos = 12;

console.log(variable_comparada_uno == variable_comparada_dos);

console.log(variable_comparada_uno === variable_comparada_dos);

console.log(variable_comparada_uno != variable_comparada_dos);

console.log(variable_comparada_uno !== variable_comparada_dos);

console.log(variable_comparada_uno > variable_comparada_dos);

console.log(variable_comparada_uno < variable_comparada_dos);

console.log(variable_comparada_uno >= variable_comparada_dos);

console.log(variable_comparada_uno <= variable_comparada_dos);

// Operadores logicos

let variable_logica_uno = true;

let variable_logica_dos = false;

console.log(variable_logica_uno && variable_logica_dos);

console.log(variable_logica_uno || variable_logica_dos);

console.log(!variable_logica_uno);

// Condicionales

let conditionalvariable = prompt("Write a number:");

if (conditionalvariable >= 10000) {
    alert("That's a very large number.");
}
else if (conditionalvariable >= 1000 && conditionalvariable < 10000) {
    alert("It's a big number.");
}
else if (conditionalvariable >= 100 && conditionalvariable < 1000) {
    alert("It is a medium number.");
}

else if (conditionalvariable >= 10 && conditionalvariable < 100) {
    alert("It's a small number");
}
else {
    alert("It's a very small number.")
}

// Arrays

let array = ["Element 0", "Element 1", 1, 1.0, true]

console.log(array)

console.log(array[0])

console.log(array[1])

console.log(array[2])

console.log(array[3])

console.log(array[-1])

// Arrays asociativos

let pc = {
    nombre: "HP Pavilion Laptop 15-eg0xxx",
    cpu: "Intel Core I5",
    gpu: "Intel IRISXe Graphics",
    ram: "8GB DDR4",
    almacenamiento: "512GB SSD",
    sistemaoperativo: "Windows 11 home single language",
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

let contador_dowhile = 0;

do {
    console.log(contador_dowhile);
    contador_dowhile++;
} while (contador_dowhile < 10);

// break

let contador_break = 0;

while (true) {
    console.log(contador_break);
    contador_break++;
    if (contador_break >= 10) {
        break;
    }
}

// for

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for in

let array_forin = [1, 2, 3, 4, 5];

for (contador_forin in array_forin) {
    console.log(contador_forin);
}

// for of

let array_forof = [1, 2, 3, 4, 5];

for (contador_forof of array_forof) {
    console.log(contador_forof);
}

// label

let array_label = [1, 2, 3, 4, 5];

let array_label_2 = [1, 2, 3, 4, array_label, 5];

etiquetaparabucle:
for (contador_label_2 of array_label_2) {
    console.log(contador_label_2);

    if (contador_label_2 == 4) {
        for (contador_label of array_label) {
            console.log(contador_label);
            break etiquetaparabucle;
        }
    }
}

// funciones

function texto(){
    console.log("Texto");
}

texto()

// return

function funcion_con_return(){
    return "Texto";
}

console.log(funcion_con_return());

// parametros

function funcion_con_parametro(nombre){
    alert(`Hola, ${nombre}`);
}

funcion_con_parametro(prompt("¿Cual es tu nombre?"));