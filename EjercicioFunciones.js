// Crea una función que reciba un string y retorne el string en mayúsculas.
function convertirMayus (frase){
    return frase.toUpperCase();
}
const resultadoMayus = convertirMayus('esteban bravo');
console.log(resultadoMayus);

// Crea una función que reciba un string y retorne el string en minúsculas.
function convertirMinus (frase){
    return frase.toLowerCase();
}
const resultadoMinus = convertirMinus('ESTEBAN BRAVO');
console.log(resultadoMinus);

// Crear una función que reciba como parámetro 2 números y los reste.
function restarNumeros (num1, num2){
    return num1 - num2;
}
let num1 = 100;
let num2 = 50;
const resta = restarNumeros(num1,num2);
console.log(`${num1} - ${num2} =`,resta);

// Crear una función que reciba como parámetro 2 números y los divida.
function dividirNumeros (num1, num2){
    return num1 / num2;
}
const division = dividirNumeros(num1,num2);
console.log(`${num1} / ${num2} =`,division);

// Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicarNumeros (num1, num2){
    return num1 * num2;
}
const multiplicacion = multiplicarNumeros(num1,num2);
console.log(`${num1} * ${num2} =`,multiplicacion);

// Crear una función que reciba un string y devuelva la longitud del string.
function longitudString (frase){
    return frase.length;
}
const frase = 'Hola como estas';
const longitud = longitudString(frase);
console.log(`La frase "${frase}" tiene ${longitud} caracteres.`);
