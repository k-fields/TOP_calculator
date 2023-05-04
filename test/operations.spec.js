const {add, subtract, divide, multiply, equals} = require('../scripts/operations.js')

describe('operations', () => {
    test('sums all elements in the array', () => {
        expect(add([1,2,3,4]).toBe(10));
    })
})