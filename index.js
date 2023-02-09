const basicOperators = {
    add:        (num1, num2) => num1 + num2,
    subtract:   (num1, num2) => num1 - num2,
    multiply:   (num1, num2) => num1 * num2,
    divide:     (num1, num2) => num1 / num2,
    modulo: (num1, num2) => num1 % num2,
}

function operate(operater, num1, num2) {
    return operater(num1,num2)
}

const lowerDisplay = document.querySelector('.lower-display')
const upperDisplay = document.querySelector('.upper-display')

const btnNumbers = document.querySelectorAll('.btn-numbers')
let hold1 = '';
let hold2 = '';

btnNumbers.forEach(btn => {
    btn.addEventListener('click', () => {
       
        if(holdOperator == '') {
            hold1 += btn.textContent
            lowerDisplay.textContent = hold1
            upperDisplay.textContent = `${hold1} ${holdOperator} ${hold2}`
        } else {
            hold2 += btn.textContent
            lowerDisplay.textContent = hold2
            upperDisplay.textContent = `${hold1} ${holdOperator} ${hold2}`
        }

        btn.classList.add('clicked')
        setTimeout(() => {
            btn.classList.remove('clicked')
        },100)

    })
})

const btnOperators = document.querySelectorAll('.btn-operator')
let holdOperator = ''

btnOperators.forEach(btn => {
    btn.addEventListener('click', () => {
        holdOperator = btn.textContent
        lowerDisplay.textContent = ''
        upperDisplay.textContent = `${hold1} ${holdOperator} ${hold2}`
    })
})

const operatorLogic = (operator) => {
    switch(operator) {
        case '+':
            return basicOperators.add;
            break;
        case '-':
            return basicOperators.subtract;
            break;
        case 'X':
            return basicOperators.multiply;
            break;
        case '/':
            return basicOperators.divide;
            break;
        case '%':
            return basicOperators.modulo;
            break;
    }
}



const equal = document.querySelector('.btn-equal')
let result = 0;
equal.addEventListener('click', () => {
    result = operate(operatorLogic(holdOperator), +hold1, +hold2)
    lowerDisplay.textContent = result;
    hold1 = result;
    hold2 = '';
    holdOperator = '';
})