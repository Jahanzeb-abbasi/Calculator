const basicOperators = {
    add:        (num1, num2) => num1 + num2,
    subtract:   (num1, num2) => num1 - num2,
    multiply:   (num1, num2) => num1 * num2,
    divide:     (num1, num2) => num1 / num2,
    percentage: (num1, num2) => num1 * 0.01,
}

function operate(operater, num1, num2) {
    return operater(num1,num2)
}

const btnNumbers = document.querySelectorAll('.btn-numbers')
const lowerDisplay = document.querySelector('.lower-display')
const upperDisplay = document.querySelector('.upper-display')

let holder1 = '';

btnNumbers.forEach(btn => {
    btn.addEventListener('click', () => {
        holder1 += btn.textContent
        lowerDisplay.textContent = holder1
    })
})


console.log(operate(basicOperators.multiply,4,6))
