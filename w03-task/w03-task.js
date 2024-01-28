/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

// Function Definition - Add Numbers
function add(number1, number2) {
    // function body
    return number1 + number2;
}

function addNumbers() {
    // Get the variables from the HTML
    let addNumber1 = parseFloat(document.querySelector('#add1').value);
    let addNumber2 = parseFloat(document.querySelector('#add2').value);

    // Call the add function with the two numbers.
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};

const subNumbers = function () {
    // Get the variables from the HTML
    let subNumber1 = parseFloat(document.querySelector('#sub1').value);
    let subNumber2 = parseFloat(document.querySelector('#sub2').value);

    // Call the subtract function with the two numbers.
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    // Get the variables from the HTML
    let factor1 = parseFloat(document.querySelector('#factor1').value);
    let factor2 = parseFloat(document.querySelector('#factor2').value);

    // Call the multiply function with the two numbers.
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Function Declaration - Divide Numbers */
function divide(number1, number2) {
    // Check if the divisor is zero to avoid division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }

    return number1 / number2;
}

function divideNumbers() {
    // Get the variables from the HTML
    let divideNumber1 = parseFloat(document.querySelector('#dividend').value);
    let divideNumber2 = parseFloat(document.querySelector('#divisor').value);

    // Check if the input values are valid numbers
    if (isNaN(divideNumber1) || isNaN(divideNumber2)) {
        document.querySelector('#quotient').value = "Invalid input";
    } else {
        // Call the divide function with the two numbers.
        document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    }
}

// Add event listener to the button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotalButton').addEventListener('click', function () {
    // Get the numeric value entered by the user in the subtotal field
    const subtotalInput = document.getElementById('subtotal');
    const subtotalValue = parseFloat(subtotalInput.value) || 0;

    // Check if the membership checkbox has been checked
    const membershipCheckbox = document.getElementById('membershipCheckbox');
    const applyDiscount = membershipCheckbox.checked;

    // Apply a 20% discount if the membership checkbox is checked
    const discountMultiplier = applyDiscount ? 0.8 : 1;
    const totalAmount = subtotalValue * discountMultiplier;

    // Output the total to the total span in the specified format
    const totalSpan = document.getElementById('totalSpan');
    totalSpan.textContent = totalAmount.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayElement = document.querySelector('#array');
arrayElement.value = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray.toFixed(2);

/* Output Multiplied by 2 Array */
const multipliedBy2 = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multipliedBy2;

/* Output Sum of Multiplied by 2 Array */
const sumMultipliedBy2 = multipliedBy2.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumMultipliedBy2.toFixed(2);
