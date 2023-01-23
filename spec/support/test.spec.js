import Keypad from '../../js/keypad.js';

let keypad = new Keypad();

describe("combination tester: ", function () {
    it('combinations of one digit is correct', () => {
        expect(keypad.combinations("2")).toEqual(["a", "b", "c"])
    });
    it('combinations of two digit is correct', () => {
        expect(keypad.combinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })
});