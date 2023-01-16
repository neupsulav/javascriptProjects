let screen = document.getElementById('screen')
// let buttons = document.getElementsByClassName('btn')

//method-2
let buttons = document.querySelectorAll('.btn')
let clearBtn = document.getElementById('clear')
let equalBtn = document.getElementById('equal')

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         let value = buttons[i].dataset.num
//         screen.value += value
//     })
// }

// method-2
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.dataset.num
        screen.value += value
    })
});

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