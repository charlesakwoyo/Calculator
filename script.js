const inputField = document.getElementById("input")
function appendValue(value) {
    if (value === "=") {
        calculateResult();
    } else {
        inputField.value += value;
    }
}
function cleardisplay() {
    inputField.value = "";
    document.getElementById("result").innerText = "";
}

function backspace() {
    inputField.value = inputField.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(inputField.value); 
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error!";
    }
}

document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateResult();
});