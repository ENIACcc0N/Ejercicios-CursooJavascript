// Comparaciones:

//Igualdad:
if(5 == 5) {
    console.log("5 es igual a 5");
}

if(5 === 5) {
    console.log('5 es muy igual a 5');
}

let a = 5;
let b = "5";

// == sólo compara el valor
// === compara  el valor y el tipo

if (a == b) {
    console.log('a es igual a b --débil');
}

if (a === b) {
console.log('a es igual a b --fuerte');
}

let c = 4;
let d = '4';


if ( c != d) {
    console.log('son números diferentes');
}

if ( c !== d) {
    console.log('son números diferentes');
}
// Comparaciones mayor que y menor que:
let max = 10;
let min = 5;

if( max > min) {
    console.log("max es mayor que min");
}

if( max <= min) {
    console.log('max es menor que min');
}
