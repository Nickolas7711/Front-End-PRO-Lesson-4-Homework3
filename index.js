// debugger;
calculationOperator = null;

do {
    calculationOperator = prompt('Введіть операцію (+, -, *, /)');
} while (calculationOperator !== '+' && calculationOperator !== '-' && calculationOperator !== '*' && calculationOperator !== '/');

numberOperands = null;

do {
    numberOperands = parseInt(prompt('Введіть кількість операндів (2-7)'));
} while (isNaN(numberOperands) || numberOperands < 2 || numberOperands > 7);

result = null;

operandNum = 1;

while (operandNum <= numberOperands) {
valueOperand = null;

do {
    valueOperand = parseInt(prompt(`Введіть операнд ${operandNum}`));
} while (isNaN(valueOperand));

switch (calculationOperator) {
    case '+':
        result = result ? result + valueOperand : valueOperand;
        break;
    case '-':
        result = operandNum === 1 ? valueOperand : result - valueOperand;
        break;
    case '*':
        result = result ? result * valueOperand : valueOperand;
        break;
    case '/':
        result = result ? result / valueOperand : valueOperand;
        break;
}
operandNum++;
}

alert(`Результат: ${result}`);