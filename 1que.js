// Push Zero to the end
function pushZerotoEnd(arr) {

    var n = arr.length;

    var count = 0;

    for (var i = 0; i < n; i++) {

        if (arr[i] != 0) {

            arr[count] = arr[i];

            count++;

        }

    }


    for (var j = count; j < n; j++) {

        arr[count] = 0;

        count++;

    }

}

let arr6 = [
    1,
    0,
    4,
    0,
    2,
    0,
    3,
    0
];

pushZerotoEnd(arr6);

console.log(arr6);