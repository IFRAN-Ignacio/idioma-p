// Función traductora
function traducirAIdiomaP(frase) {
    let resultado = "";              // string donde voy armando la salida
    const vocales = "aeiouAEIOU";    // vocales válidas (con acentos los podés agregar)

    // Recorro carácter por carácter usando length y charAt() como pide la consigna
    for (let i = 0; i < frase.length; i++) {
        const caracter = frase.charAt(i);

        // Si el carácter es una vocal -> duplico con 'p' en el medio
        if (vocales.indexOf(caracter) !== -1) {
            // Si la vocal es mayúscula, uso 'P' mayúscula y la vocal siguiente en minúscula
            if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
                resultado += caracter + "p" + caracter.toLowerCase();
            } else {
                resultado += caracter + "p" + caracter;
            }
        } else {
            // No es vocal -> lo dejo igual
            resultado += caracter;
        }
    }

    return resultado;
}

// Entrada por consola (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresá la frase a traducir: ", (frase) => {
    const traducida = traducirAIdiomaP(frase);
    console.log(traducida);
    rl.close();
});