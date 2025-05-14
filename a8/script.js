function calculate(operator) {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+':
                result = `Addition: ${n1 + n2}`;
                break;
            case '-':
                result = `Subtraction: ${n1 - n2}`;
                break;
            case '*':
                result =` Multiplication: ${n1 * n2}`;
                break;
            case '/':
                result = n2 !== 0 ?` Division: ${n1 / n2} `: "Cannot divide by zero.";
                break;
        }
    }

    document.getElementById("result").innerHTML = result;
}