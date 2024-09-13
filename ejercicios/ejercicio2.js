function esPar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 2")
console.log("-----------------------------------")
console.log(esPar(4)); // "El número es par"
console.log(esPar(7)); // "El número es impar"
