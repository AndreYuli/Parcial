function sumarCuadros(arrayNumeros) {
    let sumaTotal = 0;
    arrayNumeros.forEach(numero => {
        let numeroStr = numero.toString();
        let guiones = '-'.repeat(numeroStr.length);
        console.log(`|${guiones}|`);
        console.log(`|${numeroStr}|`);
        sumaTotal += numero;
    });
    let sumaTotalStr = sumaTotal.toString();
    let guionesTotal = '-'.repeat(sumaTotalStr.length);
    console.log(`|${guionesTotal}|`);
    console.log(`|${sumaTotalStr}|`);
}

// Ejemplo de uso
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);
