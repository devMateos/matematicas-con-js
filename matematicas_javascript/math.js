/* Cuadrado */

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

/* Triángulo */

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});



/* Reto: Altura de un triángulo */

function calcularAlturaTriangulo(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 !== base) {
        const altura = Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
        console.log(altura);
    } else {
        console.log("Este no es un triángulo isósceles");
    }
}

/* Reto: Altura de un triángulo escaleno */

function alturaEscaleno(lado1, lado2, lado3) {
    const sp = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(sp * (sp - lado1) * (sp - lado2) * (sp - lado3));

    if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        const altura = area * 2 / lado1;
        return altura;
    } else {
       return false;
    }
}