function calcularSueldoSemanal (horasA,sueldoA,horasB,sueldoB,horasC,sueldoC,horasD,sueldoD){
    //calcular el sueldo del trabajo A//
const sueldoTrabajoA = horasA * sueldoA; 
//calcular el sueldo del trabajo B//
const sueldoTrabajoB = horasB * sueldoB;
//calcular el sueldo del trabajo C//
const sueldoTrabajoC = horasC * sueldoC;
//calcular el sueldo deltrabajo D//
const sueldoTrabajoD = horasD * sueldoD;
//calcualar el sueldo total//
const sueldoTotal = sueldoTrabajoA + sueldoTrabajoB + sueldoTrabajoC + sueldoTrabajoD;
return sueldoTotal;
}
//datos de juanita//
const horasTrabajoA = 12;
const sueldoTrabajoA = 45;
const horasTrabajoB =  10;
const sueldoTrabajoB = 56
const horasTrabajoC = 8;
const sueldoTrabajoC = 52;
const horasTrabajoD = 13;
const sueldoTrabajoD = 28;
//calcular el sueldo semanal//
const sueldoSemanal = calcularSueldoSemanal (
    horasTrabajoA,
    sueldoTrabajoA,
    horasTrabajoB,
    sueldoTrabajoB,
    horasTrabajoC,
    sueldoTrabajoC,
    horasTrabajoD,
    sueldoTrabajoD
);
//imprimir el resultado//
console.log("el sueldo semanal de juanita es de: $" + sueldoSemanal);
