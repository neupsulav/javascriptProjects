let addBtn = document.getElementById('addBtn')
let subBtn = document.getElementById('subBtn')
let numberValue = document.getElementById('number')

addBtn.addEventListener('click', () => {
    let value = Number.parseInt(numberValue.innerText)
    numberValue.innerText = value + 1

    if (numberValue.innerText == 0) {
        numberValue.style.color = 'black'
    } else if (numberValue.innerText < 0) {
        numberValue.style.color = 'red'
    } else {
        numberValue.style.color = 'green'
    }
})

subBtn.addEventListener('click', () => {
    let value = Number.parseInt(numberValue.innerText)
    numberValue.innerText = value - 1

    if (numberValue.innerText == 0) {
        numberValue.style.color = 'black'
    } else if (numberValue.innerText < 0) {
        numberValue.style.color = 'red'
    } else {
        numberValue.style.color = 'green'
    }
})

