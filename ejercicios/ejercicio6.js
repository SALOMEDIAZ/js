function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje no válido";
    } else {
        return precio - (precio * (porcentaje / 100));
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
console.log(calcularDescuento(100, 20));  // 80
console.log(calcularDescuento(50, -5));   // "Porcentaje no válido"
console.log(calcularDescuento(200, 50));  // 100
console.log(calcularDescuento(150, 105)); // "Porcentaje no válido"
