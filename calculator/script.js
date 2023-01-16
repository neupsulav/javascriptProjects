let screen = document.getElementById('screen')
let buttons = document.getElementsByClassName('btn')
let clearBtn = document.getElementById('clear')
let equalBtn = document.getElementById('equal')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let value = buttons[i].dataset.num
        screen.value += value
    })
}

equalBtn.addEventListener('click', () => {
    var answer = screen.value
    if (screen.value == '') {
        screen.value = ''
    } else {
        answer = eval(screen.value)
        if (Number.isInteger(answer)) {
            screen.value = answer
        } else {
            screen.value = answer.toFixed(2)
        }
    }
})

clearBtn.addEventListener('click', () => {
    screen.value = ''
})