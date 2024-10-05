function rotateArray(arr, num) {
    if (num === 0) {
        return arr;
    };
    if (num > 0) {
        const spliIndex = arr.length - num;
        const arrNewStart = arr.slice(spliIndex);
        const arrNewEnd = arr.slice(0, spliIndex);
        const resultPositiveX = arrNewStart.concat(arrNewEnd);
        return resultPositiveX;
    } else {
        const splitIndex = num + arr.length;
        const arrNewStart = arr.slice(-splitIndex);
        const arrNewEnd = arr.slice(0, -splitIndex);
        const resultNegativeX = arrNewStart.concat(arrNewEnd);
        return resultNegativeX;
    }
}

module.exports = rotateArray;