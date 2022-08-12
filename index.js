// const btn = document.querySelectorAll(".btn");

// const screen = document.getElementById("display");

// const result = document.querySelector(".result");

// // Display Time

// function clock() {
//     const printTime = document.getElementById("time-paragraph");

//     const time = new Date();
//     setTimeout;

//     function checkTime(i) {
//         if (i < 10) {
//             i = "0" + i;
//         } // add zero in front of numbers < 10
//         return i;
//     }

//     let hours = time.getHours();

//     hours = checkTime(hours);

//     let minutes = time.getMinutes();

//     minutes = checkTime(minutes);

//     let seconds = time.getSeconds();

//     seconds = checkTime(seconds);

//     const timeOnly = hours + " : " + minutes;
//     printTime.innerHTML = timeOnly;

//     setTimeout(clock, 1000);
// }
// // To display selected options on screen
// for (item of btn) {
//     item.addEventListener("click", function(e) {
//         btntext = e.target.innerText;
//         if (btntext == "x") {
//             btntext = "*";
//         }

//         if (btntext == "÷") {
//             btntext = "/";
//         }
//         screen.value += btntext;

//         if (screen.value.length > 9) {
//             // screen.value = screen.value.substring(0, 12);
//             screen.style.fontSize = "25px";
//         } else {
//             screen.style.fontSize = "35px";
//         }

//         // if (screen.value.length > 9) {
//         //     screen.value = screen.value.slice(0, 19);
//         // }
//     });
// }

// // Square root function
// function sqrt() {
//     screen.value = Math.sqrt(screen.value);
// }

// // +/- function
// function plusOrMinus() {
//     if (screen.value > 0) {
//         screen.value = "-" + screen.value;
//     } else if (screen.value < 0) {
//         screen.value *= -1;
//     }
// }

// // % function
// function percentage() {
//     screen.value = screen.value / 100;
// }

// // let x = 100;
// // x = x.toLocaleString("en-US");
// // console.log(x);

// function equal() {
//     screen.value = eval(screen.value);
//     // if (screen.value.length >= 19) {
//     //     screen.value = "error";
//     // }
// }

// Target my elements
const numbers = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equal = document.querySelector(".equals");
const clearScreen = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const previousOperandTextElement = document.querySelector(".previous-operand");
const newOperandTextElement = document.querySelector(".new-operand");

// Create a calculator class
class Calculator {
    constructor(previousOperandTextElement, newOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.newOperandTextElement = newOperandTextElement;
        this.clearDisplay();
    }

    clearDisplay() {
        this.newOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    delete() {
        this.newOperand = this.newOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.newOperand.includes(".")) return;
        this.newOperand = this.newOperand.toString() + number.toString();
    }

    calculatorOperation(operation) {
        if (this.newOperand === "") return;
        if (this.previousOperand !== "") {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.newOperand;
        this.newOperand = "";
    }

    calculate() {
        let calculation;
        const last = parseFloat(this.previousOperand);
        const current = parseFloat(this.newOperand);

        if (isNaN(last) || isNaN(current)) return;

        switch (this.operation) {
            case "+":
                calculation = last + current;
                break;
            case "-":
                calculation = last - current;
                break;
            case "x":
                calculation = last * current;
                break;
            case "÷":
                calculation = last / current;
                break;
            case "%":
                calculation = (last / 100) * current;
                break;

            default:
                return;
        }

        this.newOperand = calculation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateScreen() {
        this.newOperandTextElement.innerText = this.newOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
    }
}

const calculator = new Calculator(
    previousOperandTextElement,
    newOperandTextElement
);

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.calculatorOperation(button.innerText);
        calculator.updateScreen();
    });
});

equal.addEventListener("click", (button) => {
    calculator.calculate();
    calculator.updateScreen();
});

clearScreen.addEventListener("click", (button) => {
    calculator.clearDisplay();
    calculator.updateScreen();
});

deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateScreen();
});