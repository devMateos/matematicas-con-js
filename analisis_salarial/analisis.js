//Análisis salarial: promedio, mediana, moda y pronóstico de incremento salarial para el año siguiente
function salaryAnalysis(person) {
    const subject = salarios.find((element) => {
        return element.name == person;
    });
    const jobs = subject.trabajos;
    const salariesList = jobs.map((element) => {
        return element.salario;
    });

    let increasePercentage = [];
    for (let i = 1; i < salariesList.length; i++) {
            const a = salariesList[i];
            const b = salariesList[i - 1];
            const increase = (a - b) / b;
            increasePercentage.push(increase);
    }

    return {
        "Promedio": average(salariesList),
        "Mediana": median(salariesList),
        "Moda": mode(salariesList),
        "Incremento salarial": salariesList[salariesList.length - 1] + (salariesList[salariesList.length - 1] * median(increasePercentage)),
    }
}
