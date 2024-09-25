// Imprimir en consola los números del 1 al 10.
console.log('Numeros del 1 al 10:');
for (let i=1; i<=10; i++){
    console.log(i);
}

// Imprimir en consola los números del 10 al 1.
console.log('Numeros del 10 al 1:');
for (let i=10; i>0; i--){
    console.log(i);
}

// Imprimir en consola los números del 1 al 10 pero solo los pares.
console.log('Numeros pares que estan entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

// Imprimir en consola los números del 1 al 10 pero solo los impares.
console.log('Numeros impares que estan entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%2 == 1){
        console.log(i);
    }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
console.log('Numeros que son multiplos de 3 y estan entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%3 == 0){
        console.log(i);
    }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
console.log('Numeros que son multiplos de 5 y estan entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%5 == 0){
        console.log(i);
    }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
let bandera = false;
console.log('Numeros que son multiplos de 3 y 5, que esten entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
        bandera = true;
    } 
}
if(!bandera){
    console.log('No hay numeros que sean multiplos de 3 y 5 en el rango de 1 al 10');
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
console.log('Numeros que son multiplos de 3 o 5, que esten entre 1 y 10:');
for (let i=1; i<=10; i++){
    if(i%3 == 0 || i%5 == 0){
        console.log(i);
        bandera = true;
    } 
}