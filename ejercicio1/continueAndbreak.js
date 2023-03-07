// Casos muy específicos - break, continue:

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if(lista[i] === 3) {
        continue;
    }


    console.log(lista[i]);

    if (lista[i] > 5 ){
        break; 
    }

}



// Cuál es el ámbito de un bucle

// Diferencia de alcance de variables declaradas
// en forma 'var' ' 'let', esta última es referente a la variable declarada dentro del bucle
//  no afecta al resto del código.
