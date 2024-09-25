// Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre,
// edad y género. Luego, muestra la información de esa persona por la consola.
// Definir el objeto "persona"
const persona = {
    nombre: 'Esteban Bravo',
    edad: 21,
    genero: 'Masculino'
};

// Mostrar la información del objeto 
console.log('Información de la persona:');
console.log('Nombre:', persona.nombre);
console.log('Edad:', persona.edad);
console.log('Género:', persona.genero);

// Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y 
// indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir 
// cada propiedad del objeto y el tipo de dato que es.

// Definir el objeto "caja"
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: ['foto.jpg', 'foto2.jpg'],
    estado: 'buen estado'
};

// Imprimir el objeto completo
console.log('Objeto caja completo:', caja);

// Imprimir cada propiedad del objeto y su tipo de dato
console.log('Cuadernos:', caja.cuadernos, '- Tipo de dato:', typeof caja.cuadernos);
console.log('Lápices:', caja.lapices, '- Tipo de dato:', typeof caja.lapices);
console.log('Papel:', caja.papel, '- Tipo de dato:', typeof caja.papel);
console.log('Fotografías:', caja.fotografias, '- Tipo de dato:', typeof caja.fotografias);
console.log('Estado:', caja.estado, '- Tipo de dato:', typeof caja.estado);
