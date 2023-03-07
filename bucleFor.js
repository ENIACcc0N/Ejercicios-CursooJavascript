// Bucles For

// for (iniccializacion; condicion; actualizacion) {
    // Esto es el bucle
// }

for (let i = 0; i < 10; i++) {
    // Esto es un buble
    console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 8, 12];

for (let i = 0; i < lista.length; i++) {
    // Esto es un buble
    console.log(lista[i]);
}

// Estructura for...of
for ( let valor of lista) {
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor =>{
    console.log(valor);
})

// Estructura for...in
let persona = {
    name: "Alberto",
    apellido: "González Acosta",
    edad: 29,
    isDevoloper: true
}

// Ejemplo de llamado en un for con la creación de un objeto
let atrib = "apellido";
console.log(persona[atrib])

for (let atributo in persona) {
    console.log(atributo);
    console.log(persona[atributo]);
}




