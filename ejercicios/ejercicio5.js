function clasificarEdad(edad) {
    if (edad < 12) {
        return "Niño";
    } else if (edad >= 12 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto mayor";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 5")
console.log("-----------------------------------")
console.log(clasificarEdad(10));  // "Niño"
console.log(clasificarEdad(16));  // "Adolescente"
console.log(clasificarEdad(30));  // "Adulto"
console.log(clasificarEdad(70));  // "Adulto mayor"

