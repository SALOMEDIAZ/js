function mayorDeDos(num1, num2) {
    if (num1 === num2) {
        return "Los números son iguales";
    } else if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 3")
console.log("-----------------------------------")
console.log(mayorDeDos(5, 10)); // 10
console.log(mayorDeDos(8, 8));  // "Los números son iguales"
