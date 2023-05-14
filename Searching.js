// 1.Linear Search

const arr = [
    9,
    8,
    7,
    91,
    11
];
const Linear = (data, target) => {
    for (let i of data) {
        if (i === target) {
            console.log(`index pf target element ${target} in the array is`)
            return data.indexOf(i)
        }
    }
    return -1
}
console.log(Linear(arr, 7))

// 2.Global Linear

const arr1 = [
    1,
    2,
    4,
    3,
    3,
    5,
    6,
    3
]
const global = (data, target) => {
    let res = [];
    for (let i in data) {
        if (data[i] === target) {
            res.push(i)
        }
    }
    if (! res) {
        return false
    }
    return res
}
console.log(global(arr1, 3));

// 3.Binary Search

const arr2 = [
    21,
    31,
    41,
    71,
    91
];
const binary = (data, target) => {
    let s = 0;
    let e = data.length - 1;
    let mid = Math.floor((s + e) / 2);

    while (s <= e) {
        if (data[mid] === target) {
            console.log(`Index of given element in the array is:`)
            return mid
        } else if (data[mid] < target) {
            s = mid + 1;
        } else if (data[mid] > target) {
            e = mid - 1;
        }

        mid = Math.floor((s + e) / 2);

    }
    return false
}
console.log(binary(arr2, 91))