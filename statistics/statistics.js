/* Ejemplos */
const list = [1, 10, 5, 4];
const list2 = [1, 11, 15, 7, 9, 2, 5];

const list3 = [1, 2, 5, 7, 9, 2, 5, 2, 8];
const list4 = [6, 2, 78, 6, 2, 74, 6, 90, 72, 23, 6, 23, 2, 5, 57];

/* Promedio */

function sumAll (a, b) {
    return a + b;
}

function average(arr) {
    const sum = arr.reduce(sumAll);

    return sum / arr.length;
}


/* Mediana */
function median(arr) {

    const orderArr = arr.sort((a, b) => {return a - b});
    let i;

    if(orderArr.length % 2 === 1) {
        i = (orderArr.length - 1) / 2;
        return orderArr[i];
    } else if(orderArr.length % 2 === 0) {
        i = (orderArr.length) / 2;
        return average([orderArr[i], orderArr[i - 1]]);
    }

}


/* Moda */
function mode(arr) {

    const newArr = arr.map((element) => {
        let filteredArr = arr.filter((e) => {
            return e === element;
        })
        return {
            name: element,
            quantity: filteredArr.length,
        };
    })

    const orderedArr = newArr.sort((a, b) => {
        return a.quantity - b.quantity;
    });

    return orderedArr[orderedArr.length - 1].name;
}


/* -------------------- */
console.log(`Promedio 1: ${average(list)}`);
console.log(`Promedio 2: ${average(list2)}`);
console.log(`Promedio 3: ${average(list3)}`);
console.log(`Promedio 4: ${average(list4)}`);

console.log(`Mediana 1: ${median(list)}`);
console.log(`Mediana 2: ${median(list2)}`);
console.log(`Mediana 3: ${median(list3)}`);
console.log(`Mediana 4: ${median(list4)}`);

console.log(`Moda1: ${mode(list3)}`);
console.log(`Moda2: ${mode(list4)}`);

/* --------------------- */

/* Media ponderada */
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

function weightedAverage(arr) {
    const sum = arr.map((element) => {
        return element.note * element.credit;
    })
    const div = arr.map((element) => {
        return element.credit;
    })
    return sum.reduce(sumAll) / div.reduce(sumAll);
}

console.log(`Media ponderada: ${weightedAverage(notes)}`);