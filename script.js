function getNumbers()
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return {num1, num2};
}

function calculate(operation)
{
    const {num1, num2} = getNumbers();
    let result;
    let op;
    switch(operation)
    {
        case "add":
            result = num1 + num2;
            op = "+";
            history(num1, num2, op, result);
            break;
        case "subtract":
            result = num1 -num2;
            op = "-";
            break;
        case "multiply":
            result = num1 * num2;
            op = "*";
            break;
        case "divide":
            result = num2 !== 0 ? num1/num2 : "can't divide 0";
            op = "/";
            break;
        default:
            result = "dumbdumb";
    }
    return result;  
}

function history(num1, num2, operation, result)
{
    const entry = document.createElement("li");
    entry.innerText = `${num1} ${operation} ${num2} = ${result}`;
    document.getElementById('history').appendChild(entry);

}

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('add')}`;
});

document.getElementById('subtract').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('subtract')}`;
});

document.getElementById('multiply').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('multiply')}`;
});

document.getElementById('divide').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('divide')}`;
});

document.getElementById('clear').addEventListener('click', ()=>{
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = "fuck";
})