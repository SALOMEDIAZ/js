function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura); // Cálculo del IMC

    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
console.log(calcularIMC(60, 1.7)); // "Normal"
console.log(calcularIMC(80, 1.7)); // "Sobrepeso"
console.log(calcularIMC(50, 1.7)); // "Bajo peso"
console.log(calcularIMC(100, 1.7)); // "Obesidad"
