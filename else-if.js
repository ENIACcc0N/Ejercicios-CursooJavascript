// Concatenación de estructuras alternativas(estructuras de control).

// Ejemplo notas de clases.
// Deutsch: zumbeispiel Nummen aus Schule.

let notas = 5;

if (notas === 5){
    console.log('Enorabuena has aprobado');
} else  if (notas === 4) {
    console.log('Has suspendido');
} else if (notas === 3) {
    console.log('Has suspendido, te has esforzado poco');
} else if (notas === 2) {
    console.log('Has suspendido, has hecho poca cosa');
} else if (notas === 1) {
    console.log('Has suspendido, no has hecho nada');
} else if (notas === 0) {
    console.log('No te has presentado');
} else {
    console.log('Error dados mal introducidos');
}