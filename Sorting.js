// Sorting Algo's
// 1.Bubble Sort
const arr3 = [
    45,
    3,
    18,
    10,
    8,
    12
];
const bubble = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp
            }
        }
    }
    return data
}
console.log(bubble(arr3))

// 2.Selection Sort
const arr4 = [
    24,
    40,
    404,
    20,
    18
];
const Selection = (data) => {
    for (let i = 0; i < data.length; i++) {
        let min = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[min]) {
                min = j
            }
        }

        if (min !== i) {
            [
                data[i], data[min]
            ] = [
                data[min], data[i]
            ]
        }
    }
    return data
}
console.log(Selection(arr4))

// 3. Insertion Sort

const arr5 = [
    17,
    45,
    18,
    7,
    10
];
const Insertion = (data) => {

    for (let i = 1; i < data.length; i++) {
        let current = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j--
        }
        data[j + 1] = current
    }
    return data

}
console.log(Insertion(arr5))





