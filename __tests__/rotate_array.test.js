const rotateArray = require("../katas/rotate_array");

describe("rotateArray", () => {
    test("rotateArray() should always return an array", () => {
        expect(rotateArray([], 0)).toBeTruthy();
    });
    test("if the num is 0, returns the array unchanged", () => {
        expect(rotateArray([1, 2], 0)).toEqual([1, 2]);
    });
    test("if the num is positive, returns the array rotated x times to the right", () => {
        expect(rotateArray([1, 2, 3], 1)).toEqual([ 3, 1, 2 ]);
        expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([ 3, 4, 5, 1, 2 ]);
        expect(rotateArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    });
    // test("if the number is positive, allows multiple rotations and returns the array rotated x times to the right", () => {
    //     expect(rotateArray([3, 7, 2], 7)).toEqual([2, 3, 7]);
    //     expect(rotateArray([3, 7, 2], 8)).toEqual([7, 2, 3]);
    //     expect(rotateArray[1, 2, 3], 6).toEqual([1, 2, 3]);
    // });
    test("if the num is negative, returns the array rotated x times to the left", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], -7)).toEqual([2, 3, 4, 5, 6, 1]);
        expect(rotateArray([1, 2, 3, 4, 5, 6], -8)).toEqual([3, 4, 5, 6, 1, 2]);
    })
});