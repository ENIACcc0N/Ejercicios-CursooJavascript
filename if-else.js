// Estructuras alternativas if ... else.

if (true){
    console.log('es verdadero');
}

if (false){
    console.log('es verdadero');
} else{
    console.log('es falso');
}

// Ejemplo con el saldo de un banco(retiro de dinero disponible).

let saldo = 50;
let efectivo = 20;

if (efectivo <= saldo){
    console.log('retiro disponible');
} else {
    console.log('retiro no disponible');
}