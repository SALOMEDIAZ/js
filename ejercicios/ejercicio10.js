function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 10")
console.log("-----------------------------------")
console.log(esBisiesto(2020)); // "Es bisiesto"
console.log(esBisiesto(2100)); // "No es bisiesto"
console.log(esBisiesto(2000)); // "Es bisiesto"
console.log(esBisiesto(1900)); // "No es bisiesto"
