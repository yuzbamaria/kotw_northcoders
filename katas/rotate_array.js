function rotateArray(arr, x) {
    if (x === 0) {
        return arr;
    };

    const arrIndices= arr.length;
    const newLength = arrIndices - x;
    const arrNewStart = arr.slice(newLength);
    const arrNewEnd = arr.slice(0, newLength);
    const resultArr = arrNewStart.concat(arrNewEnd);
    // console.log(resultArr) 
    return resultArr;
    // console.log(arrNewStart)
    // console.log(arrNewEnd)
    // console.log(arrIndices)
    // console.log(newLength)
}

console.log(rotateArray([1, 2, 3, 4, 5], 3))

module.exports = rotateArray;