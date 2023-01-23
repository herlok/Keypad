import Keypad from './keypad.js';

let input = document.getElementById("input");
let regExp = /[a-zA-Z]/g;

document.getElementById("submit").addEventListener("click", () => {

    let input = document.getElementById("input").value;
    if(input.includes("1") || input.includes("0") || regExp.test(input))
    {
        alert('The combination contains either letters, 0 or 1. Choose numbers between 2-9');
    }

    let keypad = new Keypad();
    let words = keypad.combinations(input);
    let output = document.getElementById("output");
    let checkbox = document.getElementById("checkbox");

  

    if (checkbox.checked) {
        words = words.reverse();
        output.innerHTML = words.join(", ");
    }
    else {
        output.innerHTML = words.join(", ");
    }


});
