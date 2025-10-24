function calcularPotencia() {
  if (exponente === 0) {
    return 1;
  } else if (exponente > 0) {
    return Math.pow(base, exponente);
  } else {
    return 1 / Math.pow(base, -exponente);
  }
}

//su uso//
let base = 2;
let exponente = -3;
let resultado = calcularPotencia();
console.log(resultado);

