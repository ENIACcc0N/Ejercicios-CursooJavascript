// Listas, Arrays, arreglos, vectores
const list1 = [1, 3, "hola", true]
const lista2 = new Array(7)
const lista3 = [list1, lista2]
lista2[3] = "Soy el elemento cuatro ubicado en la posición número 3 en memoria"
console.log(list1);
console.log(lista2);
console.log(lista3)


// Objetos
const  movil = {
    altura: 10,
    peso: 450,
    anchura: 4.3,
    marca: "apple",
    isWhite: false,
    tarjeta:{
        SIM: "vodafone",
        Tipo: "contrato"
    },
    "medidas-tarjeta": 43
}
console.log(movil.anchura);
console.log(movil.tarjeta.SIM);
    // Definir nuevos atributos del objeto una vez definido.
movil.pantalla = ("Samsung"); 
console.log(movil.pantalla);
    // Reditar valores de los atributos previamente definidos.
movil.SIM = "prepago";
console.log(movil.SIM);
    
// Fechas
// Librerias de apoyo Moment.js
const fechaAhora = new Date();
console.log(fechaAhora);
const fechaMilis = new Date(10); // Definición de fecha en milisegundos.
console.log(fechaMilis);
const fechaCAdena = new Date("march 23 2023"); // Fecha indicando en cadena de caracteres.
console.log(fechaCAdena);
const fechaValores = new Date(1993, 6, 26); // Fecha utilizando valores.
console.log(fechaValores)
// Definimos  la fecha acutal de ahora.
const dia = fechaAhora.getDate();
const mes = fechaAhora.getMonth() +1;
const anyo = fechaAhora.getFullYear();
console.log(dia, mes, anyo);


