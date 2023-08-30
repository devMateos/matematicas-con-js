const companies = {};
salarios.forEach((person) => {
    person.trabajos.forEach((job) => {
        if (!companies[job.empresa]) {
            companies[job.empresa] = {};
        }

        if (!companies[job.empresa][job.year]) {
            companies[job.empresa][job.year] = [];
        }

        companies[job.empresa][job.year].push(job.salario);
    })
})

function medianPerYear(company, year) {
    return median(companies[company][year]);
}

function salaryProjection(company) {
    const searchedCompany = companies[company];
    const medianList = [];
    Object.values(searchedCompany).forEach((year) => {
        medianList.push(median(year));
    })

    let increasePercentage = [];
    for (let i = 1; i < medianList.length; i++) {
            const a = medianList[i];
            const b = medianList[i - 1];
            const increase = (a - b) / b;
            increasePercentage.push(increase);
    }

    const medianOfTotal = medianList[medianList.length - 1] + (medianList[medianList.length - 1] * median(increasePercentage));
    return medianOfTotal;
}