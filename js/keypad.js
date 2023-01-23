export default class Keypad {

    constructor() {
        this.letters = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"]
        };
    }

    combinations(digits, prefix = "") {
        let firstDigitLetters = this.letters[digits[0]];
        let words = [];
        for (let i = 0; i < firstDigitLetters.length; i++) {
            let word = prefix + firstDigitLetters[i];
            // Ha elertuk a legmelyebb szintet visszadunk egy teljes kombinaciot
            if (digits.length == 1)
                words.push(word);
            else
                words = words.concat(this.combinations(digits.substr(1), word));
        }
        return words;
    }

}
