// @ts-nocheck

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let suma = 0;

function pedirNumero() {
  rl.question("Teclea un número (0 para terminar): ", (entrada) => {
    const numero = parseFloat(entrada);

    if (numero === 0) {
      console.log(`La suma total de los números es: ${suma}`);
      rl.close();
    } else if (!isNaN(numero)) {
      suma += numero;
      pedirNumero(); // vuelve a pedir otro número
    } else {
      console.log("Por favor, introduce un número válido.");
      pedirNumero(); // vuelve a pedir en caso de error
    }
  });
}

pedirNumero();
suma.js

