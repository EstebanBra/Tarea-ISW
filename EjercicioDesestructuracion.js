const usuario = {
    nombre: 'Esteban',
    apellido: 'Bravo',
    edad: 21,
    direccion: {
        calle: 'Nueva Alegria',
        numero: 123,
        ciudad: 'San Pedro',
        pais: 'Chile'
    },
    contactos: {
        telefono: '123456789',
        email: 'EstebanBS@example.com',
    redesSociales: {
        instagram: '@Esteban',
    }
    },
    intereses: ['Programación', 'VideoJuegos', 'Leer','Autos']
};

// Extrae el nombre, el apellido y la ciudad en variables separadas.
const {nombre, apellido} = usuario;
const {ciudad} = usuario.direccion; 

// Extrae el primer interés en una variable llamada "primerInteres".
const [primerInteres] = usuario.intereses;

// Extrae el email y el instagram en variables separadas.
const { email } = usuario.contactos;
const { instagram } = usuario.contactos.redesSociales;

// Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario".
const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;

// Mostrar por pantalla
console.log('Nombre:', nombre);
console.log('Apellido:', apellido);
console.log('Ciudad:', ciudad);
console.log('Primer Interés:', primerInteres);
console.log('Email:', email);
console.log('Instagram:', instagram);
console.log('Calle Usuario:', calleUsuario);
console.log('Número Usuario:', numeroUsuario);