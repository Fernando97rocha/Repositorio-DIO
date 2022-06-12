function numerosPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}

//com callback function
/*
function numerosPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}
*/

const array = [1, 3, 4, 6, 7, 9, 13, 14, 20];

console.log(numerosPares(array));
