/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

// Creamos una variable que contenga "mi nombre".
var nombre = "Alberto";

// Variable con mi edad.
var edad = 29;

// Respuesta Booleans de ¿Eres desarrollador?
var rEresDesarrollador = true;

// Mostrar mi fecha de nacimiento por pantalla a través de la función "date()"
const fechaHora = new Date();
console.log(fechaHora);
const fechaNacimiento = new Date("26/07/1993");
console.log(fechaNacimiento);

// Crear un objeto "libro" con mis atributo concretos.

const libro={
    titulo: "El silencio de los corderos",
    Autor: "Antony Hawkins",
    fecha: "28/02/1993",
    url: "amazon.wkewjffkdfmmm.comd"
}

console.log(libro.url);
libro.newUrl = "www.corteingle.coms";
console.log(libro.newUrl);





