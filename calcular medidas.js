function calcularMedidas() {
    //definir las variables//
    const medida_cm = [89, 59, 89]
    const estatura_mts = 1.70;
    const peso_kg = 53;
    //convertir las medidas en pulgadas//
    const medida_pulgadas =
    medida_cm.map(cm => cm * 0.39370079);
    //convertir las estatura a pies//
    const estatura_pies = estatura_mts * (3.280839);
//convertir el peso a libras//
const peso_libras = peso_kg * (2.20462);
//imprimir los resultados//
console.log("medidas en pulgadas:",medida_pulgadas);
console.log("estatura a pies:",estatura_pies);
console.log("convertir peso a libras:",peso_libras);

}
calcularMedidas();



