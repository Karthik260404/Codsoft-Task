// Function to add characters to the display
function addToDisplay(value) {
    document.getElementById('result').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Function to evaluate and calculate the result
function calculate() {
    try {
        // Evaluate the expression and update the display
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        // Handle errors (e.g., division by zero)
        document.getElementById('result').value = 'Error';
    }
}
