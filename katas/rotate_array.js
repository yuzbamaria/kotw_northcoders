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
        return resultPositiveX;
    } else {
        const arrLastIndex = arr.length + 1;
        const startingPoint = x + arrLastIndex;
        console.log(arrLastIndex)
        console.log(startingPoint)
        // if (startingPoint === arr.length) {
        //     const arrLastIndex = arr.length - 1;
        //     const newStartingPoint = x + arrLastIndex;
        //     console.log(newStartingPoint)
        //     const arrNewStart = arr.slice(newStartingPoint);
        //     const arrNewEnd = arr.slice(0, newStartingPoint);
        //     const result = arrNewStart.concat(arrNewEnd);
        //     return result;
        // }
        const arrNewStart = arr.slice(startingPoint);
        console.log(arrNewStart)
        const arrNewEnd = arr.slice(0, startingPoint);
        console.log(arrNewEnd)
        const resultNegativeX = arrNewStart.concat(arrNewEnd);
        return resultNegativeX;
    }
}

console.log(rotateArray([1, 2, 3, 4], 6))

module.exports = rotateArray;