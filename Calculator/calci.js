// const buttons = document.querySelectorAll('.buttons button');

// buttons.forEach(button => {
//     const text = document.querySelector(".display")
//     button.addEventListener('click', (e) => {
//         const buttontext = e.target.textContent;
//         text.value += buttontext
//         console.log(buttontext);
//         console.log(text);
//     });
// });

// const equal = document.querySelector(".equal")
// equal.addEventListener("click", () => {
//     const text = document.querySelector(".display").value;
//     const regex = /(\d+)([+\-*/])(\d+)/;
//     const match = text.match(regex);

//     if (match) {
//         const num1 = match[1];
//         const operator = match[2];
//         const num2 = match[3];
//         console.log(num1);
//         console.log(operator);
//         console.log(num2);
//         const result=calculateWithEval(num1, operator, num2);
//         text.value=result;
//     }

// })

// function calculateWithEval(num1, operator, num2) {
//     const expression = `${num1} ${operator} ${num2}`;
//     return eval(expression); 
// }

const buttons = document.querySelectorAll('.buttons button');
const display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        display.value += buttonText;
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    const expression = display.value;
    const regex = /(\d+)([+\-*/])(\d+)/;
    const match = expression.match(regex);

    if (match) {
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        const result = calculate(num1, operator, num2);
        display.value = result;
    } else {
        display.value = "Error";
    }
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error";
        default:
            return "Error";
    }
}

const clear=document.querySelector(".clear")
clear.addEventListener("click",()=>{
    display.value="";
})