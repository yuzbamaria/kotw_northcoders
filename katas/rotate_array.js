function rotateArray(arr, x) {
    if (x === 0) {
        return arr;
    };
    if (x > 0) {
        const arrLength = arr.length;
        const arrLastIndex = arrLength - x;
        const arrNewStart = arr.slice(arrLastIndex);
        const arrNewEnd = arr.slice(0, arrLastIndex);
        const resultPositiveX = arrNewStart.concat(arrNewEnd);
        // console.log(arrLength)
        // console.log(arrLastIndex)
        // console.log(arrNewStart)
        // console.log(resultArr) 
        // console.log(arrNewEnd)
        return resultPositiveX;
    } else {
        const arrLastIndex = arr.length -1;
        const startingPoint = x + arrLastIndex;
        console.log(arrLastIndex)
        console.log(startingPoint)
        const arrNewStart = arr.slice(startingPoint);
        console.log(arrNewStart)
        const arrNewEnd = arr.slice(0, startingPoint);
        console.log(arrNewEnd)
        const resultNegativeX = arrNewStart.concat(arrNewEnd);
        return resultNegativeX;
    }
}

console.log(rotateArray([1, 2, 3], -2))

module.exports = rotateArray;