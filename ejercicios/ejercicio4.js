function calculadora(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 === 0) {
                return "No se puede dividir entre 0";
            } else {
                return num1 / num2;
            }
        default:
            return "Operación no reconocida";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
console.log(calculadora("suma", 5, 3));           // 8
console.log(calculadora("division", 10, 0));      // "No se puede dividir entre 0"
console.log(calculadora("multiplicacion", 2, 4)); // 8
console.log(calculadora("resta", 10, 4));         // 6
console.log(calculadora("potencia", 2, 4));       // "Operación no reconocida"
