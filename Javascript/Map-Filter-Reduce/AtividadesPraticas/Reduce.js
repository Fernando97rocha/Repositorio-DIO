function somaArray(arr) {
    return arr.reduce((prev, current) => prev + current);
}


const array = [1, 3, 4, 0];

console.log(somaArray(array));

console.log(array); 