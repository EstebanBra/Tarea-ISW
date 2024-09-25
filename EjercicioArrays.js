// Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumaArray(array){
    let suma = 0;
    for(let i = 0; i <= array.length; i++){
        suma = suma + i;
    }
    return suma;
}
let numeros = [1,2,3,4,5];
const resultadoSuma = sumaArray(numeros);
console.log('Resultado suma = ', resultadoSuma);

// Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioArray(array){
    let suma = 0;
    for(let i = 0; i <= array.length; i++){
        suma = suma + i;
    }
    return suma/array.length;
}
const promedio = promedioArray(numeros);
console.log('Resultado promedio', promedio);

// Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga 
// los mismos strings pero con todas las letras en mayúsculas.

function convertirArrayMayus (array){
    return array.map(frase => frase.toUpperCase());
}
// Ejemplo de uso
const arrayDeStrings = ['hola', 'soy', 'esteban'];
const arrayMayus = convertirArrayMayus(arrayDeStrings);

console.log(arrayMayus);

// Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function filtrarNumerosPares(array) {
    return array.filter(function(num) {
        return num % 2 === 0; // Verifica si el número es par
    });
}

// Ejemplo de uso
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numeros2);

console.log(numerosPares); 
