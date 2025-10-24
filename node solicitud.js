const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function evaluarSolicitud(edad, nota, sexo) {
  return (nota >= 5 && edad >= 18)
    ? (sexo.toUpperCase() === "F" ? "ACEPTADA" : sexo.toUpperCase() === "M" ? "POSIBLE" : "NO ACEPTADA")
    : "NO ACEPTADA";
}

rl.question("Edad: ", e => 
  rl.question("Nota: ", n => 
    rl.question("Sexo (M/F): ", s => {
      console.log("\nResultado:", evaluarSolicitud(+e, +n, s));
      rl.close();
    })
  )
);
