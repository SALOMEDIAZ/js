function convertirTemperatura(temperatura, escala) {
    if (escala === "C") {
        // Convertir de Celsius a Fahrenheit
        return (temperatura * 9/5) + 32;
    } else if (escala === "F") {
        // Convertir de Fahrenheit a Celsius
        return (temperatura - 32) * 5/9;
    } else {
        return "Escala no válida";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
console.log(convertirTemperatura(0, "C"));  // 32
console.log(convertirTemperatura(32, "F")); // 0
console.log(convertirTemperatura(100, "C")); // 212
console.log(convertirTemperatura(212, "F")); // 100
