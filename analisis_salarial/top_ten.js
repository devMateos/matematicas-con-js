function topTenMedian() {
    let medianList = salarios.map((person) => salaryAnalysis(person.name).Mediana);
    
    medianList.sort((a, b) => a - b);

    const topTen = medianList.slice(medianList.length - (medianList.length / 10), medianList.length)
    return median(topTen);
}