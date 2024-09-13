function validarContrasena(contrasena) {
    const tieneNumero = /\d/; // Expresión regular para verificar si contiene al menos un número
    if (contrasena.length >= 8 && tieneNumero.test(contrasena)) {
        return "Contraseña válida";
    } else {
        return "Contraseña no válida";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
console.log(validarContrasena("pass1234")); // "Contraseña válida"
console.log(validarContrasena("password")); // "Contraseña no válida"
console.log(validarContrasena("pass12"));   // "Contraseña no válida"
